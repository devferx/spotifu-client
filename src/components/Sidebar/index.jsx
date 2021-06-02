import { useContext } from "react";

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
        <a className="active" href="#">
          <span className="icon icon--home" aria-label="Home Icon"></span> Home
        </a>

        <a href="#">
          <span className="icon icon--search" aria-label="Search Icon"></span>{" "}
          Buscar
        </a>

        <a href="#">
          <span
            className="icon icon--credit-card"
            aria-label="Credit Card Icon"
          ></span>{" "}
          Premium
        </a>
      </div>

      <SidebarPlaylistMenu title="Tu Biblioteca" playlists={userPlaylists} />
      <SidebarPlaylistMenu title="Playlists" playlists={featuredPlaylists} />
    </aside>
  );
};
