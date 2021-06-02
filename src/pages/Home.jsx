import { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { Layout } from "../components/Layout";
import { AlbumCardList } from "../components/AlbumCardList";

import { useAuth } from "../hooks/useAuth";
import { spotifyContext } from "../context/SpotifyContext.jsx";

const code = new URLSearchParams(window.location.search).get("code");

export const Home = () => {
  const { newReleases, featuredPlaylists, fetchInitialData } =
    useContext(spotifyContext);

  const accessToken = useAuth(code);

  useEffect(() => {
    if (!accessToken) return;

    fetchInitialData(accessToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  if (!code) {
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
