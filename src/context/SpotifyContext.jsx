import { createContext, useState } from "react";
import axios from "axios";

export const spotifyContext = createContext();

export const SpotifyContextProvider = ({ children }) => {
  const [newReleases, setNewReleases] = useState([]);
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const [userPlaylists, setUserPlaylists] = useState([]);

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

  return (
    <spotifyContext.Provider
      value={{
        newReleases,
        featuredPlaylists,
        userPlaylists,
        fetchInitialData,
      }}
    >
      {children}
    </spotifyContext.Provider>
  );
};
