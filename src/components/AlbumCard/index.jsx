import "./styles.css";

export const AlbumCard = ({ album, isPlaylist }) => (
  <div className="glide__slide album-card">
    <img src={album.images[0].url} alt={album.title} />
    <p className="album-card-title">{album.name}</p>

    <p className="album-card-artist">
      {!isPlaylist ? album.artists[0].name : album.description}
    </p>
  </div>
);
