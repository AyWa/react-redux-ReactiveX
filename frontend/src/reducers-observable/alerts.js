import { combineEpics } from 'redux-observable';
import {SET_ALERT, DISMISS_ALERT} from 'actions/types'
import {dismissAlert} from 'actions'
import Rx from 'rxjs';

const maxDelay = 5000;

export const timeoutDismissAlert$ = (action$) => {
  return action$.ofType(SET_ALERT)
    .mergeMap(action =>
      Rx.Observable.concat(
        Rx.Observable.of(action)
          .delay(maxDelay)
          .map(({payload}) => payload.id)
          .race(
            action$.ofType(DISMISS_ALERT)
              .skipWhile(({payload}) => payload !== action.payload.id)
              .first()
              .map(() => null),
          ),
      )
      .map(a => a ? dismissAlert(a) : {}),
    ).ignoreElements()
}

export default combineEpics(
  timeoutDismissAlert$,
)
