import { useContext } from "react";
import { Layout } from "../components/Layout";
import { TrackList } from "../components/TrackList";
import { spotifyContext } from "../context/SpotifyContext.jsx";

export const SearchPage = () => {
  const { searchResults } = useContext(spotifyContext);

  return (
    <Layout>
      <TrackList tracks={searchResults} />
    </Layout>
  );
};
