import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_KEY,
});

export const useSearch = (accessToken) => {
  const [search, setSearch] = useState("");
  const [SearchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!search) return;
    if (!accessToken) return;

    spotifyApi.searchTracks(search).then((res) => {
      setSearchResults(res.body.tracks.items);
    });
  }, [search, accessToken]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  return { search, setSearch, SearchResults };
};
