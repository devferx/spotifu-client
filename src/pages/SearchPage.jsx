import { useContext } from "react";
import { TrackList } from "../components/TrackList";
import { spotifyContext } from "../context/SpotifyContext.jsx";

export const SearchPage = () => {
  const { searchResults } = useContext(spotifyContext);

  return <TrackList tracks={searchResults} />;
};
