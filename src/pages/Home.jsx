import { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { Layout } from "../components/Layout";
import { AlbumCardList } from "../components/AlbumCardList";

import { spotifyContext } from "../context/SpotifyContext";
import { authContext } from "../context/AuthContext";

const code = new URLSearchParams(window.location.search).get("code");

export const Home = () => {
  const { newReleases, featuredPlaylists, fetchInitialData } =
    useContext(spotifyContext);

  const { accessToken, login } = useContext(authContext);

  useEffect(() => {
    if (!accessToken) {
      return login(code);
    }

    fetchInitialData(accessToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  if (!code && !accessToken) {
    return <Redirect to="/login" />;
  }

  return (
    <Layout>
      <AlbumCardList title="Nuevos Lanzamientos" albumList={newReleases} />
      <AlbumCardList
        title="Listas de Reproducción Destacadas"
        albumList={featuredPlaylists}
        isPlaylist={true}
      />
    </Layout>
  );
};
