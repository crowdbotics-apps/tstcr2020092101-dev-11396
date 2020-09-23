import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* registrationandlogin_post_registration_readWorker(action) {
  try {
    const result = yield call(
      apiService.registrationandlogin_post_registration_read,
      action
    )
    yield put(
      actions.registrationandlogin_post_registration_readSucceeded(result)
    )
  } catch (err) {
    yield put(actions.registrationandlogin_post_registration_readFailed(err))
  }
}
function* registrationandlogin_post_registration_readWatcher() {
  yield takeEvery(
    types.REGISTRATIONANDLOGIN_POST_REGISTRATION_READ,
    registrationandlogin_post_registration_readWorker
  )
}
function* signupandlogin_post_api_v1_login_readWorker(action) {
  try {
    const result = yield call(
      apiService.signupandlogin_post_api_v1_login_read,
      action
    )
    yield put(actions.signupandlogin_post_api_v1_login_readSucceeded(result))
  } catch (err) {
    yield put(actions.signupandlogin_post_api_v1_login_readFailed(err))
  }
}
function* signupandlogin_post_api_v1_login_readWatcher() {
  yield takeEvery(
    types.SIGNUPANDLOGIN_POST_API_V1_LOGIN_READ,
    signupandlogin_post_api_v1_login_readWorker
  )
}
function* signupandlogin_post_api_v1_signup_readWorker(action) {
  try {
    const result = yield call(
      apiService.signupandlogin_post_api_v1_signup_read,
      action
    )
    yield put(actions.signupandlogin_post_api_v1_signup_readSucceeded(result))
  } catch (err) {
    yield put(actions.signupandlogin_post_api_v1_signup_readFailed(err))
  }
}
function* signupandlogin_post_api_v1_signup_readWatcher() {
  yield takeEvery(
    types.SIGNUPANDLOGIN_POST_API_V1_SIGNUP_READ,
    signupandlogin_post_api_v1_signup_readWorker
  )
}
export default function* rootSaga() {
  const sagas = [
    registrationandlogin_post_registration_readWatcher,
    signupandlogin_post_api_v1_login_readWatcher,
    signupandlogin_post_api_v1_signup_readWatcher
  ]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
