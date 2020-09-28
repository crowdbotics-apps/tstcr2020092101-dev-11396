import * as types from "./constants"
export const signupandlogin_post_api_v1_login_read = () => ({
  type: types.SIGNUPANDLOGIN_POST_API_V1_LOGIN_READ
})

export const signupandlogin_post_api_v1_login_readSucceeded = response => ({
  type: types.SIGNUPANDLOGIN_POST_API_V1_LOGIN_READ_SUCCEEDED,
  response
})

export const signupandlogin_post_api_v1_login_readFailed = error => ({
  type: types.SIGNUPANDLOGIN_POST_API_V1_LOGIN_READ_FAILED,
  error
})

export const signupandlogin_post_api_v1_signup_read = () => ({
  type: types.SIGNUPANDLOGIN_POST_API_V1_SIGNUP_READ
})

export const signupandlogin_post_api_v1_signup_readSucceeded = response => ({
  type: types.SIGNUPANDLOGIN_POST_API_V1_SIGNUP_READ_SUCCEEDED,
  response
})

export const signupandlogin_post_api_v1_signup_readFailed = error => ({
  type: types.SIGNUPANDLOGIN_POST_API_V1_SIGNUP_READ_FAILED,
  error
})

export const registrationandlogin_post_registration_read = () => ({
  type: types.REGISTRATIONANDLOGIN_POST_REGISTRATION_READ
})

export const registrationandlogin_post_registration_readSucceeded = response => ({
  type: types.REGISTRATIONANDLOGIN_POST_REGISTRATION_READ_SUCCEEDED,
  response
})

export const registrationandlogin_post_registration_readFailed = error => ({
  type: types.REGISTRATIONANDLOGIN_POST_REGISTRATION_READ_FAILED,
  error
})
