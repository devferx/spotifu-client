import React from "react";
import ReactDOM from "react-dom";
import { SkeletonTheme } from "react-loading-skeleton";

import { SpotifyContextProvider } from "./context/SpotifyContext";
import { AuthContextProvider } from "./context/AuthContext";
import { PlayerContextProvider } from "./context/PlayerContext";

import App from "./App";
import "./index.css";

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
