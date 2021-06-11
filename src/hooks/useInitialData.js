import { useEffect, useState } from "react";
import axios from "axios";

export const useInitialData = (accessToken) => {
  const [newReleases, setNewReleases] = useState([]);
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const [userPlaylists, setUserPlaylists] = useState([]);

  useEffect(() => {
    if (!accessToken) return;

    const fetchInitialData = async (accessToken) => {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/spotify/initial-data`,
        {
          accessToken,
        }
      );

      const { newReleases, featuredPlaylists, userPlaylists } = data;

      setFeaturedPlaylists(featuredPlaylists.playlists.items);
      setNewReleases(newReleases.items);
      setUserPlaylists(userPlaylists);
    };

    fetchInitialData(accessToken);
  }, [accessToken]);

  return { newReleases, featuredPlaylists, userPlaylists };
};
