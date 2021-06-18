import { useContext } from "react";

import { spotifyContext } from "../../context/SpotifyContext";
import calendarIcon from "../../assets/icons/calendar.svg";
import clockIcon from "../../assets/icons/clock.svg";
import playIcon from "../../assets/icons/play.svg";
import "./styles.css";

export const TrackList = ({ tracks }) => {
  const { setCurrentSong } = useContext(spotifyContext);
  console.log(tracks);
  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  return (
    <div className="track-list-container">
      <div className="track-list-header">
        <span></span>
        <span></span>
        <span>TÍTULO</span>
        <span>Artista</span>
        <span>ÁLBUM</span>
        <span>
          <img src={calendarIcon} alt="Calendar Icon" />
        </span>
        <span>
          <img src={clockIcon} alt="Clock Icon" />
        </span>
      </div>

      {tracks.map((track) => (
        <div className="track-list-item" key={track.id}>
          <div className="track-list-item button-container">
            <button onClick={() => setCurrentSong(track)}>
              <img src={playIcon} alt="Play Icon" />
            </button>
          </div>
          <div>
            <img width="100%" src={track.album.smallerImage.url} alt="" />
          </div>
          <div>{track.name}</div>
          <div>{track.artists[0].name}</div>
          <div>{track.album.name}</div>
          <div>{track.album.release_date}</div>
          <div>{millisToMinutesAndSeconds(track.duration_ms)}</div>
        </div>
      ))}
    </div>
  );
};
