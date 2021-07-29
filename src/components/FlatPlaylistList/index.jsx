import { useContext } from "react";

import { FlatPlaylistItem } from "../FlatPlaylistItem";
import { spotifyContext } from "../../context/SpotifyContext";

import "./styles.css";

export const FlatPlaylistList = () => {
  const { featuredPlaylists } = useContext(spotifyContext);

  return (
    <div className="flat-playlist">
      <h2>Buenos Dias!</h2>
      {/* Playlist Items */}
      <div className="flat-playlist__container">
        {featuredPlaylists.map((playlist) => (
          <FlatPlaylistItem
            key={`playlist-flat-${playlist.id}`}
            playlist={playlist}
          />
        ))}
      </div>
    </div>
  );
};
