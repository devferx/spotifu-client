import { useContext } from "react";
import { Link } from "react-router-dom";

// import { spotifyContext } from "../../context/SpotifyContext";
import { playerContext } from "../../context/PlayerContext";
import { millisToMinutesAndSeconds } from "../../utils/millisToMinutesAndSeconds";
import { getSmallerImage } from "../../utils/getSmallerImage";

import playIcon from "../../assets/icons/play.svg";
import "./styles.css";

export const TrackListItem = ({ track }) => {
  const { playSong } = useContext(playerContext);

  return (
    <div className="track-list__item">
      <div className="track-list__item__button-container">
        <button onClick={() => playSong(track)}>
          <img src={playIcon} alt="Play Icon" />
        </button>
      </div>
      <div>
        <img
          className="track-list__item__album-cover"
          width="100%"
          src={getSmallerImage(track.album.images).url}
          alt={`${track.album.name} album cover`}
        />
      </div>
      <div>
        <p className="track-list__item__title">{track.name}</p>
        <p className="track-list__item__artist">{track.artists[0].name}</p>
      </div>
      <div>
        <p className="track-list__item__album">
          <Link to={`/album/${track.album.id}`}>{track.album.name}</Link>
        </p>
      </div>
      <div>
        <p>{track.album.release_date}</p>
      </div>
      <div>
        <p>{millisToMinutesAndSeconds(track.duration_ms)}</p>
      </div>
    </div>
  );
};
