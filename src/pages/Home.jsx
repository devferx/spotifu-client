import axios from "axios";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";

import { Layout } from "../components/Layout";

import { useAuth } from "../hooks/useAuth";

const code = new URLSearchParams(window.location.search).get("code");

export const Home = () => {
  const accessToken = useAuth(code);

  useEffect(() => {
    if (!accessToken) return;

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/spotify/initial-data`, {
        accessToken,
      })
      .then(console.log);
  }, [accessToken]);

  if (!code) {
    return <Redirect to="/login" />;
  }

  return <Layout>{code}</Layout>;
};
