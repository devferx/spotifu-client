import { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { authContext } from "../context/AuthContext";
import { FlatPlaylistList } from "../components/FlatPlaylistList";
import { AlbumCardList } from "../components/AlbumCardList";
import { spotifyContext } from "../context/SpotifyContext";

const code = new URLSearchParams(window.location.search).get("code");

export const Home = () => {
  const { newReleases, featuredPlaylists } = useContext(spotifyContext);

  const { accessToken, login } = useContext(authContext);

  useEffect(() => {
    if (!accessToken) {
      return login(code);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  if (!code && !accessToken) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <FlatPlaylistList />
      <AlbumCardList title="Nuevos Lanzamientos" albumList={newReleases} />
      <AlbumCardList
        title="Listas de Reproducción Destacadas"
        albumList={featuredPlaylists}
        isPlaylist={true}
      />
    </>
  );
};
