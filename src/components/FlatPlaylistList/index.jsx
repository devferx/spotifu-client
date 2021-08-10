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
        {featuredPlaylists.map((playlist, i) => (
          <FlatPlaylistItem
            key={
              playlist?.id
                ? `playlist-flat-${playlist.id}`
                : `playlist-flat-${i}`
            }
            playlist={playlist}
          />
        ))}
      </div>
    </div>
  );
};
