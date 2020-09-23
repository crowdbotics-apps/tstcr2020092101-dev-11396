import * as types from "./constants"

const initialState = {}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.REGISTRATIONANDLOGIN_POST_REGISTRATION_READ:
    case types.REGISTRATIONANDLOGIN_POST_REGISTRATION_READ_SUCCEEDED:
    case types.REGISTRATIONANDLOGIN_POST_REGISTRATION_READ_FAILED:
    case types.SIGNUPANDLOGIN_POST_API_V1_LOGIN_READ:
    case types.SIGNUPANDLOGIN_POST_API_V1_LOGIN_READ_SUCCEEDED:
    case types.SIGNUPANDLOGIN_POST_API_V1_LOGIN_READ_FAILED:
    case types.SIGNUPANDLOGIN_POST_API_V1_SIGNUP_READ:
    case types.SIGNUPANDLOGIN_POST_API_V1_SIGNUP_READ_SUCCEEDED:
    case types.SIGNUPANDLOGIN_POST_API_V1_SIGNUP_READ_FAILED:
    default:
      return state
  }
}
