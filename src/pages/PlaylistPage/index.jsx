import { useState } from "react";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { TrackList } from "../../components/TrackList";
import { playerContext } from "../../context/PlayerContext";
import { spotifyContext } from "../../context/SpotifyContext";
import "./styles.css";

const PlaylistPage = () => {
  const { playPlaylist } = useContext(playerContext);
  const { getPlaylistInfo } = useContext(spotifyContext);
  const [playlist, setPlaylist] = useState(null);
  const params = useParams();

  useEffect(() => {
    getPlaylistInfo(params.id).then((playlist) => setPlaylist(playlist));
    return () => setPlaylist(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  if (!playlist) {
    return <p>Loading</p>;
  }

  return (
    <div className="playlist-page">
      <div className="playlist-page__header">
        <img
          className="playlist-page__header__cover"
          width="300"
          src={playlist.images[0].url}
          alt={`${playlist.name} cove`}
        />
        <div className="playlist-page__header__content">
          <p className="playlist-page__header__content__title">
            {playlist.name}
          </p>
          <p className="playlist-page__header__content__desc">
            {playlist.description}
          </p>
          <p>{playlist.followers.total.toLocaleString()} SEGUIDORES</p>
          <button
            onClick={() => playPlaylist(playlist.tracks.items)}
            className="playlist-page__header__content__btn button button-text"
          >
            Repoducir
          </button>
        </div>
      </div>

      <TrackList tracks={playlist.tracks.items} isPlaylist={true} />
    </div>
  );
};

export default PlaylistPage;
