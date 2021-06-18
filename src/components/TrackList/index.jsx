import { TrackListItem } from "../TrackListItem";
import calendarIcon from "../../assets/icons/calendar.svg";
import clockIcon from "../../assets/icons/clock.svg";

import "./styles.css";

export const TrackList = ({ tracks }) => {
  return (
    <div className="track-list">
      <div className="track-list__header">
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
        <TrackListItem key={track.id} track={track} />
      ))}
    </div>
  );
};
