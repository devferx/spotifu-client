import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { spotifyContext } from "../../context/SpotifyContext.jsx";
import { SidebarPlaylistMenu } from "../SidebarPlaylistMenu";

import spotifuLogo from "../../assets/icons/spotifu-logo.svg";
import "./styles.css";

export const Sidebar = () => {
  const { userPlaylists, featuredPlaylists } = useContext(spotifyContext);
  return (
    <aside className="sidebar">
      <img className="sidebar__logo" src={spotifuLogo} alt="logo spotifu" />

      <div className="sidebar__routes">
        <NavLink to="/home" activeClassName="active">
          <span className="icon icon--home" aria-label="Home Icon"></span> Home
        </NavLink>

        <NavLink to="/search" activeClassName="active">
          <span className="icon icon--search" aria-label="Search Icon"></span>{" "}
          Buscar
        </NavLink>

        <Link to="/">
          <span
            className="icon icon--credit-card"
            aria-label="Credit Card Icon"
          ></span>{" "}
          Premium
        </Link>
      </div>

      <SidebarPlaylistMenu title="Tu Biblioteca" playlists={userPlaylists} />
      <SidebarPlaylistMenu title="Playlists" playlists={featuredPlaylists} />
    </aside>
  );
};
