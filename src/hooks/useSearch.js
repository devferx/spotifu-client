import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { getSmallerImage } from "../utils/getSmallerImage";
import { millisToMinutesAndSeconds } from "../utils/millisToMinutesAndSeconds";

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
      let searchItems = res.body.tracks.items;

      // Search the smaller image and set duration in seconds
      searchItems = searchItems.map((item) => ({
        ...item,
        duration: millisToMinutesAndSeconds(item.duration_ms),
        album: {
          ...item.album,
          smallerImage: getSmallerImage(item),
        },
      }));

      setSearchResults(searchItems);
    });
  }, [search, accessToken]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  return { search, setSearch, searchResults };
};
