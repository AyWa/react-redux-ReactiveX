import {BOOK_SELECTED} from 'actions/types'
import 'rxjs';

export default action$ =>
  action$.ofType(BOOK_SELECTED)
    .delay(5000)
    .mapTo({ type: 'BOOK_RESET'})
