import { useContext } from "react";

import { AlbumCardList } from "../components/AlbumCardList";
import { TrackList } from "../components/TrackList";
import { spotifyContext } from "../context/SpotifyContext.jsx";

const SearchPage = () => {
  const { searchResults, search, albumsResults } = useContext(spotifyContext);

  return (
    <>
      <AlbumCardList
        title={`Resultados de ${search}`}
        albumList={albumsResults}
      />
      <TrackList tracks={searchResults} />
    </>
  );
};

export default SearchPage;
