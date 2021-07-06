import { createContext, useState } from "react";

export const playerContext = createContext();

export const PlayerContextProvider = ({ children }) => {
  const [currentMusic, setCurrentMusic] = useState([]);

  const playSong = (track) => {
    const newCurrentMusic = [track.uri];
    setCurrentMusic(newCurrentMusic);
  };

  const playPlaylist = (trackList) => {
    const newTrackList = [];

    for (let i = 0; i < trackList.length; i++) {
      const uri = trackList[i]?.track?.uri;
      uri && newTrackList.push(uri);
    }

    setCurrentMusic(newTrackList);
  };

  return (
    <playerContext.Provider value={{ currentMusic, playSong, playPlaylist }}>
      {children}
    </playerContext.Provider>
  );
};
