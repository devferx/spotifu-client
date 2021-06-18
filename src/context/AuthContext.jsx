import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

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
        window.history.pushState({}, null, "/");
      })
      .catch((err) => {
        console.log(err);
        window.location = "/";
      });
  };

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;

    const interval = setInterval(() => {
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/auth/refresh`, {
          refreshToken,
        })
        .then((res) => {
          setAccessToken(res.data.accessToken);
          setRefreshToken(res.data.refreshToken);
        })
        .catch(() => {
          window.location = "/";
        });
    }, (expiresIn - 60) * 1000);

    return () => clearTimeout(interval);
  }, [refreshToken, expiresIn]);

  return (
    <authContext.Provider value={{ accessToken, login, isLogin }}>
      {children}
    </authContext.Provider>
  );
};
