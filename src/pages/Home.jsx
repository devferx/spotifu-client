import { Redirect } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const code = new URLSearchParams(window.location.search).get("code");

export const Home = () => {
  const accessToken = useAuth(code);
  console.log(accessToken);

  if (!code) {
    return <Redirect to="/login" />;
  }

  return <div>{code}</div>;
};
