import { actionTypes } from "./types";

export function reducer(state, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isLogin: true,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        expiresIn: action.payload.expiresIn,
      };
    case actionTypes.REFRESH_TOKEN:
      return {
        ...state,
        isLogin: true,
        accessToken: action.payload.accessToken,
        expiresIn: action.payload.expiresIn,
      };
    default:
      return {
        ...state,
      };
  }
}
