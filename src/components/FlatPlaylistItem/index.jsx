import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import { getSmallerImage } from "../../utils/getSmallerImage";
import playIcon from "../../assets/icons/play.svg";

import "./styles.css";

export const FlatPlaylistItem = ({ playlist }) => {
  if (!playlist) {
    return (
      <div className="flat-playlist-item-link">
        <div className="flat-playlist-item">
          <Skeleton height={75} />

          <div className="flat-playlist-item__container">
            <p>
              <Skeleton count={2} />
            </p>
            <Skeleton circle={true} height={40} widht={40} />
          </div>
        </div>
      </div>
    );
  }

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
