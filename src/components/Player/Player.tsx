import { useState, useRef } from 'react';
import { TPlaylistItem } from '../../global/Types';
import { PropsWithChildren } from "react";
import ReactPlayer from 'react-player';
import ReactChildrenType from '../../App'
type ReactChildrenType = PropsWithChildren<{
  array: any,
  size?: any,
  color?: any,
  setPlayUrl: React.Dispatch<React.SetStateAction<TPlaylistItem | any>>
  playing: boolean
}>;

export const Player = (props: ReactChildrenType) => {
  const { array, size, color, setPlayUrl, playing } = props;

  const playerRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);

  const [isMuted, setMuted] = useState(false);
  const [index, setIndex] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [progessObj, setProgressObj] = useState({});

  const currentFile = array[index];

  return (
    <ReactPlayer
      ref={playerRef}
      progressInterval={500}
      volume={volume}
      playing={isPlaying}
      muted={isMuted}
      url={currentFile}
      className="player"
      width="100%"
      height="100%"
      onDuration={(d) => setDuration(d)}
      onProgress={(o) => setProgressObj(o)} />
  )
}