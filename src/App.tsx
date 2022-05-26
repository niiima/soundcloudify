import logo from './logo.svg';
import db from './data/playlist.json';
import { Playlist } from './components/Playlist';
import ReactPlayer from 'react-player'
import { useEffect, useState } from 'react';
function App() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [playing, setPlaying] = useState('');

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
        <ReactPlayer url={playing}
          width='100%' height='100%'
        />
        {/* </div> */}
      </header>
      <main className="bg-slate-800 flex-1 overflow-y-auto p-5">
        <Playlist array={db} size="300px" setPlayUrl={setPlaying} />
      </main>
      {/* <footer className="py-5 text-size-[1rem] bg-gray-700 text-center text-white">
        Enjoy The playlist
      </footer> */}
    </div >
  );
}

export default App;
