import axios from 'axios'
import { Observable } from 'rxjs'

const dataUrl = 'https://api.kraken.com/0/public/OHLC?pair=EOSETH'

const request = axios.get(dataUrl)

// TODO error handling
const requestInterval = Observable.timer(0, 5000)
  .flatMap(() => Observable.fromPromise(request))

export default requestInterval