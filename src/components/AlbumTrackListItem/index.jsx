import { useContext } from "react";

import { playerContext } from "../../context/PlayerContext";
import { millisToMinutesAndSeconds } from "../../utils/millisToMinutesAndSeconds";

import playIcon from "../../assets/icons/play.svg";

export const AlbumTrackListItem = ({
  track,
  albumName,
  smallerImage,
  albumArtists,
  albumReleaseDate,
}) => {
  const { playSong } = useContext(playerContext);

  return (
    <div className="track-list__item" onClick={() => playSong(track)}>
      <div className="track-list__item__button-container">
        <button>
          <img src={playIcon} alt="Play Icon" />
        </button>
      </div>
      <div>
        <img
          className="track-list__item__album-cover"
          width="100%"
          src={smallerImage}
          alt={`${albumName} album cover`}
        />
      </div>
      <div>
        <p className="track-list__item__title">{track.name}</p>
        <p className="track-list__item__artist">{albumArtists[0].name}</p>
      </div>
      <div>
        <p className="track-list__item__album">{albumName}</p>
      </div>
      <div>
        <p>{albumReleaseDate}</p>
      </div>
      <div>
        <p>{millisToMinutesAndSeconds(track.duration_ms)}</p>
      </div>
    </div>
  );
};
