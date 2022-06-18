import { LOGIN, USERINFOR, LOGOUT } from '../constant/userContants'

const initState = {
  isLoggenIn: false,
  userInfo: null,
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggenIn: action.payload,
      }
    case USERINFOR:
      return {
        ...state,
        userInfo: action.payload,
      }
    case LOGOUT:
      return {
        ...state,
        isLoggenIn: false,
        userInfo: null,
      }
    default:
      return state
  }
}

export default userReducer
