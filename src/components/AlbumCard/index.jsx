import { useHistory } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import "./styles.css";

export const AlbumCard = ({ album, isPlaylist }) => {
  const history = useHistory();
  const handleClick = () => {
    isPlaylist
      ? history.push(`/playlist/${album.id}`)
      : history.push(`/album/${album.id}`);
  };

  if (!album) {
    return (
      <div className="album-card-wrapper">
        <div className="album-card">
          <div className="album-card__image-container">
            <Skeleton height={150} />
          </div>

          <p className="album-card-title">
            <Skeleton />
          </p>

          <p className="album-card-artist">
            <Skeleton />
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="album-card-wrapper">
      <div onClick={handleClick} className="album-card">
        <div className="album-card__image-container">
          <img
            src={album.images[1]?.url || album.images[0].url}
            alt={album.title}
          />
        </div>
        <p className="album-card-title">{album.name}</p>
        <p className="album-card-artist">
          {!isPlaylist ? album.artists[0].name : album.description}
        </p>
      </div>
    </div>
  );
};
