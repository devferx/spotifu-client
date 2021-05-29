import spotifuLogo from "../../assets/icons/spotifu-logo.svg";

import "./styles.css";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=5d62507559f04b45a3a44e033520a057&response_type=code&redirect_uri=http://localhost:3000/home&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

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
