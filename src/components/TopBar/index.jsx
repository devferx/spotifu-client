import { useContext, useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

import { spotifyContext } from "../../context/SpotifyContext";
import { authContext } from "../../context/AuthContext";
import { AUTH_URL } from "../../constants";
import "./styles.css";

export const TopBar = () => {
  const { setSearch } = useContext(spotifyContext);
  const { isLogin } = useContext(authContext);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const history = useHistory();
  const pageIsSearch = useRouteMatch("/search");

  const handleSearch = (ev) => {
    const newQuery = ev.target.value;

    if (!pageIsSearch?.isExact) {
      history.push("/search");
    }

    if (newQuery.trim() === "") {
      history.push("/home");
    }

    setDebouncedSearch(newQuery);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setSearch(debouncedSearch), 500);

    return () => clearTimeout(timeout);
  }, [debouncedSearch]);

  return (
    <div className="top-bar bg-gray">
      <div className="search-input">
        <span className="search-input-icon" aria-label="Search Icon"></span>
        <input
          type="text"
          value={debouncedSearch}
          onChange={handleSearch}
          autoFocus={pageIsSearch?.isExact}
          placeholder="Artistas, canciones o podcasts"
        />
      </div>

      {!isLogin && (
        <a className="button button-text" href={AUTH_URL}>
          Login
        </a>
      )}
    </div>
  );
};
