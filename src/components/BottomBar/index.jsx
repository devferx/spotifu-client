import { useContext } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

import { spotifyContext } from "../../context/SpotifyContext";
import { authContext } from "../../context/AuthContext";
import "./styles.css";

export const BottomBar = () => {
  const { currentMusic } = useContext(spotifyContext);
  const { accessToken } = useContext(authContext);

  return (
    <div className="bottom-bar">
      {currentMusic.length !== 0 && (
        <SpotifyPlayer
          styles={{
            activeColor: "#fff",
            bgColor: "#181818",
            color: "#fff",
            loaderColor: "#fff",
            sliderColor: "#1cb954",
            trackArtistColor: "#ccc",
            trackNameColor: "#fff",
          }}
          play
          showSaveIcon
          token={accessToken}
          uris={currentMusic}
        />
      )}
    </div>
  );
};
