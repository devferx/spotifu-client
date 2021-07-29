import { getSmallerImage } from "../../utils/getSmallerImage";
import { AlbumTrackListItem } from "../AlbumTrackListItem";
import calendarIcon from "../../assets/icons/calendar.svg";
import clockIcon from "../../assets/icons/clock.svg";

import "./styles.css";

export const AlbumTrackList = ({ albumData }) => {
  const smallerImage = getSmallerImage(albumData.images).url;

  return (
    <div className="track-list">
      <div className="track-list__header">
        <span></span>
        <span></span>
        <span>TÍTULO</span>
        <span>ÁLBUM</span>
        <span>
          <img src={calendarIcon} alt="Calendar Icon" />
        </span>
        <span>
          <img src={clockIcon} alt="Clock Icon" />
        </span>
      </div>

      {albumData.tracks.items.map((track) => (
        <AlbumTrackListItem
          key={track.id}
          track={track}
          albumArtists={albumData.artists}
          smallerImage={smallerImage}
          albumName={albumData.name}
          albumReleaseDate={albumData.release_date}
        />
      ))}
    </div>
  );
};
