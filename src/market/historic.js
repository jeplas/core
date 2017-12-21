import { Observable } from 'rxjs'
import axios from 'axios'
import moment from 'moment'

/*
Time periods in seconds
  [ '60',
    '180',
    '300',
    '900',
    '1800',
    '3600',
    '7200',
    '14400',
    '21600',
    '43200',
    '86400',
    '259200',
    '604800'
  ]
Data structure
  [ CloseTime,
    OpenPrice,
    HighPrice,
    LowPrice,
    ClosePrice,
    Volume
  ]
*/

const now = moment()
const after = now.subtract(7, 'd').unix()

const request = axios.get(
  'https://api.cryptowat.ch/markets/gdax/btcusd/ohlc',
  { params: { after } },
)

const requestObservable = Observable.fromPromise(request)

// TODO fetch data and then transform to drip data for event loop
const dripObservable = requestObservable
  .map(data => data)


export default dripObservable
