import { AlbumCard } from "../AlbumCard";
import "./styles.css";

export const AlbumCardList = ({ title, albumList, isPlaylist = false }) => {
  return (
    <div className="album-card-list">
      <p className="album-card-list-title">{title}</p>

      <div className="album-card-list-container">
        {albumList.map((album) => (
          <AlbumCard key={album.id} album={album} isPlaylist={isPlaylist} />
        ))}
      </div>
    </div>
  );
};
