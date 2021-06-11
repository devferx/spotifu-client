import { createContext, useState, useEffect, useContext } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";

import { authContext } from "./AuthContext";

export const spotifyContext = createContext();

const spotifyApi = new SpotifyWebApi({
  clientId: "5d62507559f04b45a3a44e033520a057",
});

export const SpotifyContextProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(false);
  const [newReleases, setNewReleases] = useState([]);
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [search, setSearch] = useState("");
  const [SearchResults, setSearchResults] = useState([]);

  const { accessToken } = useContext(authContext);

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

  useEffect(() => {
    if (!accessToken) return;
    console.log("new access token", { accessToken });
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return;
    if (!accessToken) return;

    spotifyApi.searchTracks(search).then((res) => {
      setSearchResults(res.body.tracks.items);
    });
  }, [search, accessToken]);

  useEffect(() => {
    console.log(SearchResults);
  }, [SearchResults]);

  return (
    <spotifyContext.Provider
      value={{
        userToken,
        newReleases,
        featuredPlaylists,
        userPlaylists,
        search,
        setUserToken,
        fetchInitialData,
        setSearch,
      }}
    >
      {children}
    </spotifyContext.Provider>
  );
};
