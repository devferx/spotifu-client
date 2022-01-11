import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";

import { reducer } from "./reducer";
import { actionTypes } from "./types";
import sessionStorage from "../../utils/sessionStorage";

export const authContext = createContext();

const initialState = {
  isLogin: false,
  accessToken: undefined,
  refreshToken: undefined,
  expiresIn: undefined,
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isLogin, accessToken, refreshToken, expiresIn } = state;

  const onLogin = ({ accessToken, refreshToken, expiresIn }) => {
    dispatch({
      type: actionTypes.LOGIN,
      payload: { accessToken, refreshToken, expiresIn },
    });
  };

  const onRefreshToken = ({ accessToken, expiresIn }) =>
    dispatch({
      type: actionTypes.REFRESH_TOKEN,
      payload: {
        accessToken,
        expiresIn,
      },
    });

  const login = (code) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, { code })
      .then((res) => {
        const { accessToken, refreshToken, expiresIn } = res.data;
        onLogin({ accessToken, refreshToken, expiresIn });

        sessionStorage.setToken(accessToken, refreshToken, expiresIn);
        window.history.pushState({}, null, "/");
      })
      .catch((err) => {
        console.log(err);
        window.location = "/";
      });
  };

  const loginSessionStorage = () => {
    const tokenInfo = sessionStorage.getToken();
    if (!tokenInfo) return;

    const now = new Date();
    const difference =
      (now.getTime() - new Date(tokenInfo.date).getTime()) / 1000;

    if (difference < tokenInfo.expiresIn) {
      const { accessToken, refreshToken, expiresIn } = tokenInfo;
      onLogin({ accessToken, refreshToken, expiresIn: expiresIn - difference });
    }

    if (difference > tokenInfo.expiresIn) {
      refreshAcessToken(tokenInfo.refreshToken);
    }
  };

  const refreshAcessToken = (refreshTokenParam) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/auth/refresh`, {
        refreshToken: refreshTokenParam,
      })
      .then((res) => {
        const { accessToken, expiresIn } = res.data;
        onRefreshToken({ accessToken, expiresIn });
      })
      .catch(() => {
        window.location = "/";
      });
  };

  useEffect(() => {
    loginSessionStorage(refreshToken);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;

    const interval = setInterval(() => {
      refreshAcessToken(refreshToken);
    }, (expiresIn - 60) * 1000);

    return () => clearTimeout(interval);
  }, [refreshToken, expiresIn]);

  return (
    <authContext.Provider value={{ accessToken, isLogin, login }}>
      {children}
    </authContext.Provider>
  );
};
