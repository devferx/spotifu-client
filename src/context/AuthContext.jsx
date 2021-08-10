import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

import sessionStorage from "../utils/sessionStorage";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  const login = (code) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, { code })
      .then((res) => {
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        setIsLogin(true);
        sessionStorage.setToken(
          res.data.accessToken,
          res.data.refreshToken,
          res.data.expiresIn
        );
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
      setAccessToken(tokenInfo.accessToken);
      setRefreshToken(tokenInfo.refreshToken);
      setExpiresIn(tokenInfo.expiresIn - difference);
      setIsLogin(true);
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
        setAccessToken(res.data.accessToken);
        setExpiresIn(res.data.expiresIn);
        setIsLogin(true);
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
    <authContext.Provider value={{ accessToken, login, isLogin }}>
      {children}
    </authContext.Provider>
  );
};
