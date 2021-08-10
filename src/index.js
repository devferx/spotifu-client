import React from "react";
import ReactDOM from "react-dom";
import { SkeletonTheme } from "react-loading-skeleton";

import { SpotifyContextProvider } from "./context/SpotifyContext";
import { AuthContextProvider } from "./context/AuthContext";
import { PlayerContextProvider } from "./context/PlayerContext";

import App from "./App";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

const AppState = ({ children }) => (
  <AuthContextProvider>
    <SpotifyContextProvider>
      <PlayerContextProvider>{children}</PlayerContextProvider>
    </SpotifyContextProvider>
  </AuthContextProvider>
);

ReactDOM.render(
  <AppState>
    <SkeletonTheme color="#202020" highlightColor="#444">
      <App />
    </SkeletonTheme>
  </AppState>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
