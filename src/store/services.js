import axios from "axios"
const registrationandLogin = axios.create({
  baseURL: "https://tstcr2020092101-dev-11396.botics.co/rest-auth",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const signupandLogin = axios.create({
  baseURL: "https://tstcr2020092101-dev-11396.botics.co/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function registrationandlogin_post_registration_read(requestBody) {
  return registrationandLogin.post(`/registration/`, requestBody)
}
function signupandlogin_post_api_v1_login_read(password, username) {
  return signupandLogin.post(`/api/v1/login/`)
}
function signupandlogin_post_api_v1_signup_read(requestBody) {
  return signupandLogin.post(`/api/v1/signup`, requestBody)
}
export const apiService = {
  registrationandlogin_post_registration_read,
  signupandlogin_post_api_v1_login_read,
  signupandlogin_post_api_v1_signup_read
}
