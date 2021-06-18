import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { getSmallerImage } from "../utils/getSmallerImage";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_KEY,
});

export const useSearch = (accessToken) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!search) return;
    if (!accessToken) return;

    spotifyApi.searchTracks(search).then((res) => {
      const searchItems = res.body.tracks.items;

      searchItems.map(
        (item) => (item.album.smallerImage = getSmallerImage(item))
      );

      setSearchResults(searchItems);
    });
  }, [search, accessToken]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  return { search, setSearch, searchResults };
};
