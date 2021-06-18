import { createContext, useState, useContext } from "react";

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
      }}
    >
      {children}
    </spotifyContext.Provider>
  );
};
