import { useContext } from "react";

import { spotifyContext } from "../../context/SpotifyContext";
import playIcon from "../../assets/icons/play.svg";
import "./styles.css";

export const TrackListItem = ({ track }) => {
  const { setCurrentSong } = useContext(spotifyContext);

  return (
    <div className="track-list__item">
      <div className="track-list__item__button-container">
        <button onClick={() => setCurrentSong(track)}>
          <img src={playIcon} alt="Play Icon" />
        </button>
      </div>
      <div>
        <img
          width="100%"
          src={track.album.smallerImage.url}
          alt={`${track.album.name} album cover`}
        />
      </div>
      <div>
        <p className="track-list__item__title">{track.name}</p>
      </div>
      <div>
        <p className="track-list__item__artist">{track.artists[0].name}</p>
      </div>
      <div>
        <p>{track.album.name}</p>
      </div>
      <div>
        <p>{track.album.release_date}</p>
      </div>
      <div>
        <p>{track.duration}</p>
      </div>
    </div>
  );
};
