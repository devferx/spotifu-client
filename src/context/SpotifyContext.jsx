import { createContext, useState, useContext } from "react";
import SpotifyWebApi from "spotify-web-api-node";

import { authContext } from "./AuthContext";
import { useSearch } from "../hooks/useSearch";
import { useInitialData } from "../hooks/useInitialData";

export const spotifyContext = createContext();

export const SpotifyContextProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState({});
  const { accessToken } = useContext(authContext);
  const { newReleases, featuredPlaylists, userPlaylists } =
    useInitialData(accessToken);
  const { search, setSearch, searchResults } = useSearch(accessToken);

  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_SPOTIFY_CLIENT_KEY,
    accessToken,
  });

  const getPlaylistInfo = async (playlistId) => {
    const resp = await spotifyApi.getPlaylist(playlistId);
    return resp.body;
  };

  return (
    <spotifyContext.Provider
      value={{
        newReleases,
        featuredPlaylists,
        userPlaylists,
        search,
        searchResults,
        currentSong,
        setSearch,
        setCurrentSong,
        getPlaylistInfo,
      }}
    >
      {children}
    </spotifyContext.Provider>
  );
};
