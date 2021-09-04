import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_KEY,
});

export const useSearch = (accessToken) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [albumsResults, setAlbumsResults] = useState([]);

  useEffect(() => {
    if (!search) return;
    if (!accessToken) return;

    spotifyApi.searchTracks(search).then((res) => {
      const searchItems = res.body.tracks.items;

      setSearchResults(searchItems);
    });

    spotifyApi.searchAlbums(search).then((res) => {
      const albumsItems = res.body.albums.items;

      setAlbumsResults(albumsItems);
    });
  }, [search, accessToken]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  return { search, searchResults, albumsResults, setSearch };
};
