import logo from './logo.svg';
import db from './data/playlist.json';
import { Playlist } from './components/Playlist';
import ReactPlayer from 'react-player'
import { useEffect, useState } from 'react';
import { BASE_PLATFORM_URL } from './global/constants';
import { PlaylistIcon } from './components/PlaylistIcon';

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

        {/* <div className='player-wrapper'> */}
        <ReactPlayer url={BASE_PLATFORM_URL + playing.address}
          width='100%' height='100%'
        />
        {/* </div> */}
      </header>
      <main className="bg-slate-800 flex-1 overflow-y-auto p-5">
        <Playlist array={db} size="200px" setPlayUrl={setPlaying} playing={true} />
      </main>
      <footer className="py-0 hover:bg-slate-300 hover:text-sky-600 transition-colors text-yellow-200 bg-slate-700 text-center text-white">
        <span className='flex text-base '>
          <PlaylistIcon color="#6589ab" size="30px" />
          {playing.address.split("/")[2].replace(/\-/g, " ")}</span>
      </footer>
    </div >
  );
}

export default App;
