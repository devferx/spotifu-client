import { AUTH_URL } from "../../constants";
import spotifuLogo from "../../assets/icons/spotifu-logo.svg";
import "./styles.css";

export const Login = () => {
  return (
    <main className="login">
      <section className="login-card">
        <img src={spotifuLogo} alt="Spotify Logo" />
        <a className="button button-text" href={AUTH_URL}>
          Login
        </a>
      </section>
    </main>
  );
};
