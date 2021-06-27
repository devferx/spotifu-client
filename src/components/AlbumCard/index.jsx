import { useHistory } from "react-router-dom";
import "./styles.css";

export const AlbumCard = ({ album, isPlaylist }) => {
  const history = useHistory();
  const handleClick = () => {
    isPlaylist && history.push(`/playlist/${album.id}`);
  };

  return (
    <div onClick={handleClick} className="glide__slide album-card">
      <img src={album.images[0].url} alt={album.title} />
      <p className="album-card-title">{album.name}</p>

      <p className="album-card-artist">
        {!isPlaylist ? album.artists[0].name : album.description}
      </p>
    </div>
  );
};
