import { LOGIN, USERINFOR, LOGOUT } from '../constant/userContants'

export const changeLogin = (payload) => {
  return {
    type: LOGIN,
    payload,
  }
}

export const userInfo = (payload) => {
  return {
    type: USERINFOR,
    payload,
  }
}

export const userLogOut = () => {
  return {
    type: LOGOUT,
  }
}
