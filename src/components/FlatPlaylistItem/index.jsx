import { Link } from "react-router-dom";

import { getSmallerImage } from "../../utils/getSmallerImage";
import playIcon from "../../assets/icons/play.svg";

import "./styles.css";

export const FlatPlaylistItem = ({ playlist }) => {
  return (
    <Link className="flat-playlist-item-link" to={`/playlist/${playlist.id}`}>
      <div className="flat-playlist-item">
        <img
          className="flat-playlist-item__cover"
          src={getSmallerImage(playlist.images).url}
          alt={`${playlist.name} cover`}
        />
        <div className="flat-playlist-item__container">
          <p>{playlist.name}</p>
          <button className="button button--circle">
            <img src={playIcon} alt="" />
          </button>
        </div>
      </div>
    </Link>
  );
};
