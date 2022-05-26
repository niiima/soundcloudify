import db from './data/playlist.json';
import { Playlist } from './components/Playlist';
import ReactPlayer from 'react-player'
import { useEffect, useState } from 'react';
import { BASE_PLATFORM_URL } from './global/constants';
import { PlaylistIcon } from './components/PlaylistIcon';
// import { PlayerController } from './components/Player/PlayerController';
function App() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [playing, setPlaying] = useState(db[0]);

  useEffect(() => {
    console.log(playing)
  }, [playing, scrollPosition]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen bg-stale-800">
      <header className={`py-0 bg-gray-700 text-white text-center`}
      >
        <ReactPlayer url={BASE_PLATFORM_URL + playing.address}
          width='100%' height='100%'
        />
      </header>
      <main className="bg-slate-800 flex-1 overflow-y-auto p-5">
        <Playlist array={db} size="200px" setPlayUrl={setPlaying} playing={true} />
      </main>
      <footer className="py-0 
      hover:bg-slate-300 
      hover:text-sky-600 
      transition-colors 
      text-yellow-200 
      bg-slate-700 
      text-center 
      ">
        <span className='flex '>
          <PlaylistIcon color="#6589ab" size="26px" />
          <span className='whitespace-nowrap'>{playing.address.split("/")[2].replace(/\-/g, " ")}</span>
          {/* <span className="pt-1 inline-block pl-10"><PlayerController /></span> */}
        </span>
      </footer>
    </div >
  );
}

export default App;
