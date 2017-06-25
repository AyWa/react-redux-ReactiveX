import {TEST_SET_ERROR, SET_ALERT, DISMISS_ALERT} from 'actions/types'
import {dismissAlert} from 'actions'
import {classModifier} from 'utilities/types'
import Rx from 'rxjs';

const maxDelay = 1000;
let alertId = 1
const generateAlertId = () => alertId++

const generateAlertPayload = () => {
  generateAlertId()
  return {
    header: "hey",
    body: "this is a strong error",
    modifier: classModifier.danger,
    id: alertId,
  }
}

export default action$ =>
  action$.ofType(TEST_SET_ERROR)
    .map(() => ({
      type: SET_ALERT,
      payload: generateAlertPayload()
    }))
