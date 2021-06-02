import { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import { Layout } from "../components/Layout";
import { AlbumCardList } from "../components/AlbumCardList";

import { useAuth } from "../hooks/useAuth";

const code = new URLSearchParams(window.location.search).get("code");

export const Home = () => {
  const [newReleases, setNewReleases] = useState([]);
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const accessToken = useAuth(code);

  useEffect(() => {
    if (!accessToken) return;

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/spotify/initial-data`, {
        accessToken,
      })
      .then((resp) => {
        const { newReleases, featuredPlaylists } = resp.data;
        setFeaturedPlaylists(featuredPlaylists.playlists.items);
        console.log(featuredPlaylists.playlists.items);
        setNewReleases(newReleases.items);
      });
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
