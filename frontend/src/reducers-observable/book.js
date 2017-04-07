import {BOOK_SELECTED} from 'actions/types'
import Rx from 'rxjs';

export default action$ =>
  action$.ofType(BOOK_SELECTED)
    .switchMap(_ => Rx.Observable.timer(3000)
      .mapTo({ type: 'BOOK_RESET'}))
