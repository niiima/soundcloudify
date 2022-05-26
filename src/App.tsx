import { useEffect, useState, useRef } from 'react';
import db from './data/playlist.json';
import { Playlist } from './components/Playlist';
import ReactPlayer from 'react-player'
import { BASE_PLATFORM_URL } from './global/constants';
import { PlaylistIcon } from './components/PlaylistIcon';
// import Shuffle from './components/Player/Shuffle';
import ReactTooltip from 'react-tooltip';
import useHover from "@react-hook/hover";
import { NextIcon, Shuffle } from './components/Player/Icons'
//import { PlayerController } from './components/Player/PlayerController';
function App() {

  //const [scrollPosition, setScrollPosition] = useState(0);
  const [playlist, setPlaylist] = useState(db)
  const [playing, setPlaying] = useState(db[0]);
  const [isShuffle, setIsShuffle] = useState(true)
  const ShuffleHoverTarget = useRef(null);
  const ShuffleHovered = useHover(ShuffleHoverTarget);

  const NextHoverTarget = useRef(null);
  const NextHovered = useHover(NextHoverTarget);

  useEffect(() => {
    //console.log(playing)
  }, [playing, playlist]);

  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="flex flex-col h-screen bg-stale-800">
      <header className={`py-0 bg-gray-700 text-white text-center`}
      >
        <ReactPlayer url={BASE_PLATFORM_URL + playing.address}
          width='100%' height='100%'
        />
      </header>
      <main className="bg-slate-800 flex-1 overflow-y-auto p-5">
        <Playlist array={playlist} size="200px" setPlayUrl={setPlaying} playing={true} />
      </main>
      <footer className="py-0 
      hover:bg-slate-500 
      hover:text-white 
      transition-colors 
      text-yellow-200 
      bg-slate-700 
      text-center 
      ">
        <span className='flex '>
          <PlaylistIcon color="yellow" size="26px" />
          <span className='whitespace-nowrap'>{playing.title}</span>
          <span ref={NextHoverTarget} data-tip="Next" className="pt-1 inline-block pl-10"
            onClick={() => {
              let index = playlist.indexOf(playing);
              if (index >= playlist.length)
                setPlaying(playlist[0])
              else
                setPlaying(playlist[index + 1])
            }}>
            {/* <PlayerController /> */}
            <NextIcon isHover={NextHovered} size="18px" />
            <ReactTooltip />
          </span>
          <span ref={ShuffleHoverTarget} data-tip="Shuffle Playlist" className="pt-1"
            onClick={() => {
              console.log(isShuffle)
              setIsShuffle(isShuffle => !isShuffle);
              if (isShuffle) {
                let shuffled = db
                  .map(value => ({ value, sort: Math.random() }))
                  .sort((a, b) => a.sort - b.sort)
                  .map(({ value }) => value);
                setPlaylist(shuffled);
              }
              else
                setPlaylist(db);
            }} >
            <ReactTooltip />
            {"  "}
            <Shuffle isHover={ShuffleHovered} color={ShuffleHovered ? "yellow" : "lightblue"}
              isShuffle={isShuffle} size={"18px"}></Shuffle> </span>
        </span>
      </footer>
    </div >
  );
}

export default App;
