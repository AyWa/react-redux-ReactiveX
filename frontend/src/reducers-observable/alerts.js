import { combineEpics } from 'redux-observable';
import {TEST_SET_ERROR, SET_ALERT, DISMISS_ALERT} from 'actions/types'
import {classModifier} from 'utilities/types'
import Rx from 'rxjs';

const maxDelay = 5000;
let alertId = 0
const generateAlertId = () => alertId++

const generateAlertPayload = () => {
  generateAlertId()
  return {
    header: `hey ${alertId}`,
    body: 'this is a strong error',
    modifier: classModifier.danger,
    id: alertId,
  }
}

export const generateAlert$ = (action$) => {
  return action$.ofType(TEST_SET_ERROR)
    .map(action => ({
        type: SET_ALERT,
        payload: generateAlertPayload(),
      })
    )
  }
export const timeoutDismissAlert$ = (action$) => {
  return action$.ofType(SET_ALERT)
    .mergeMap(action =>
      Rx.Observable.empty()
      .concat(
        Rx.Observable.of(action)
          .delay(maxDelay)
          .map(({payload}) => ({type: DISMISS_ALERT, payload: payload.id}))
          .race(
            action$.ofType(DISMISS_ALERT)
              .skipWhile(({payload}) => payload !== action.payload.id)
              .first()
              .map(() => null)
          )
      )
      .map((a) => a ? a : {type: "I_DONT_WANT"})
    )
  }

// export const generateAction$ = (action$) => {
//   return action$.ofType(TEST_SET_ERROR)
//     .map(action => ({
//         type: SET_ALERT,
//         payload: generateAlertPayload(),
//       })
//       .concat(
//         Rx.Observable.race(
//           action$.ofType(DISMISS_ALERT)
//             .skipWhile((payload) => {
//               console.log(payload);
//               console.log(alertId);
//               // console.log(myId);
//               return payload === alertId
//             })
//             .first()
//             .map(() => "complete"),
//           Rx.Observable.timer(maxDelay),
//         )
//         .map(a => {
//           console.log(a)
//           console.log(alertId);
//           return a !== "complete" ? {
//             type: DISMISS_ALERT,
//             payload: alertId,
//           } : {type: "OSEF"}
//         })
//       )
//     )
//   }
//
// export const yolo = (id) => {
//
// }

// export const raceUserAction = (action$) => {
//   return action$.ofType(DISMISS_ALERT)
//     .takeWhile(payload => {
//         return payload <= 4
//       }
//     )
// }
// export const generateAction = (action$) => {
//   const incoming = action$.ofType(TEST_SET_ERROR)
//     .map(() => ({
//        type: SET_ALERT,
//        payload: generateAlertPayload(),
//   }))
//   const outgoing = incoming.switchMap((action) => {
//     return Rx.Observable.of({
//         type: DISMISS_ALERT,
//         payload: alertId,
//       }).delay(maxDelay)
//   })
//   return outgoing;
// }
  // action$.ofType(TEST_SET_ERROR)
  //   .map(() => ({
  //     type: SET_ALERT,
  //     payload: generateAlertPayload(),
  //   }))


export default combineEpics(
  generateAlert$,
  timeoutDismissAlert$,
)
