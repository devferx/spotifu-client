import { createContext, useState } from "react";
import axios from "axios";

export const spotifyContext = createContext();

export const SpotifyContextProvider = ({ children }) => {
  const [newReleases, setNewReleases] = useState([]);
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);

  const fetchInitialData = (accessToken) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/spotify/initial-data`, {
        accessToken,
      })
      .then((resp) => {
        const { newReleases, featuredPlaylists } = resp.data;
        setFeaturedPlaylists(featuredPlaylists.playlists.items);
        setNewReleases(newReleases.items);
      });
  };

  return (
    <spotifyContext.Provider
      value={{ newReleases, featuredPlaylists, fetchInitialData }}
    >
      {children}
    </spotifyContext.Provider>
  );
};
