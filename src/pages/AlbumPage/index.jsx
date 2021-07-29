import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { AlbumTrackList } from "../../components/AlbumTrackList";
import { spotifyContext } from "../../context/SpotifyContext.jsx";
import "./styles.css";

export const AlbumPage = () => {
  const [album, setAlbum] = useState(null);
  const { getAlbumInfo } = useContext(spotifyContext);
  const { albumId } = useParams();

  useEffect(() => {
    getAlbumInfo(albumId)
      .then((album) => {
        setAlbum(album);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [albumId, getAlbumInfo]);

  if (!album) {
    return <p>Loading</p>;
  }

  return (
    <>
      <header className="header">
        <img
          className="header__image"
          src={album.images[0].url}
          alt={`${album.name} cover`}
        />
        <div className="header__content">
          <h3>{album.name}</h3>
          <p>{album.artists[0].name}</p>
          <div className="header__content__btn-container">
            <button className="button button-text">Reproducir</button>
          </div>
        </div>
      </header>
      <AlbumTrackList albumData={album} />
      {/* <TrackList tracks={album.tracks.items} isAlbum={true} /> */}
    </>
  );
};
