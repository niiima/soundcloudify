import { useEffect, useState, useRef, createRef } from 'react';

import useHover from "@react-hook/hover";
import db from './data/playlist.json';
import { Playlist } from './components/Playlist';
import ReactPlayer from 'react-player'
import { PlaylistIcon } from './components/PlaylistIcon';
import ReactTooltip from 'react-tooltip';

import { NextIcon, Shuffle } from './components/Player/Icons';
import PlayListItems from './components/Player/PlayListItems';
import ArrowDown from './assets/arrowDown.svg';
import MusicWave from './assets/musicWave.svg';
import { BASE_PLATFORM_URL, _SETTINGS } from './global/constants';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  //const player = useRef(Readonly<ReactPlayerProps>);
  const [playlist, setPlaylist] = useState(db)
  const [playing, setPlaying] = useState(db[0]);

  const [isShuffle, setIsShuffle] = useState(true);
  const ShuffleHoverTarget = useRef(null);
  const ShuffleHovered = useHover(ShuffleHoverTarget);

  const NextHoverTarget = useRef(null);
  const NextHovered = useHover(NextHoverTarget);

  const headerElementReference = useRef<HTMLDivElement>(null)
  const headerElementHovered = useHover(headerElementReference)
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(true);
  const [headerClicked, setHeaderClicked] = useState(false);

  const handleNext = () => {
    let index = playlist.indexOf(playing);
    if (index === playlist.length - 1)
      setPlaying(playlist[0])
    else
      setPlaying(playlist[index + 1])
  }


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (headerElementReference.current && headerElementReference.current.style) {
      if (scrollPosition > _SETTINGS.headerResizeScrollBreakpoint && isHeaderExpanded === true) {
        headerElementReference.current.style.height = _SETTINGS.headerMinimizedHeight;
        setIsHeaderExpanded(false);
      }
      else if (scrollPosition < _SETTINGS.headerResizeScrollBreakpoint && isHeaderExpanded === false) {
        headerElementReference.current.style.height = _SETTINGS.headerDefaultHeight;
        setIsHeaderExpanded(true);
      }
    }
  }, [scrollPosition]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    // console.log(position)
    if (scrollPosition !== position)
      setScrollPosition(position);
  };

  const handleHeaderResize = () => {
    if (headerElementReference)
      if (headerElementReference.current) {
        if (headerElementHovered) //psy 
          headerElementReference.current.style.height = _SETTINGS.headerStretchedHeight
        else
          if (scrollPosition > _SETTINGS.headerResizeScrollBreakpoint) headerElementReference.current.style.height = _SETTINGS.headerMinimizedHeight
          else if (scrollPosition <= _SETTINGS.headerResizeScrollBreakpoint) headerElementReference.current.style.height = _SETTINGS.headerDefaultHeight
      }
  }

  useEffect(() => {
    handleHeaderResize();
  }, [headerElementHovered])

  useEffect(() => {

    handleHeaderResize();
  }, [headerClicked])

  return (
    // <div className="flex flex-col h-screen bg-stale-800">
    <>
      <header ref={headerElementReference}
        // onClick={(e) => {
        //   e.stopPropagation();
        //   setHeaderClicked(!headerClicked);
        //   console.log(headerClicked);
        // }}
        className="transition-all sticky bg-gray-600 text-gray-100 
      flex flex-col top-0 z-30 w-full h-26" data-dev-hint="mobile menu bar">

        <ReactPlayer
          // ref={player}
          url={BASE_PLATFORM_URL + playing.address}
          playing={true}
          onEnded={() => {
            //console.log("onEnded", playing);
            handleNext();
          }}
          // onPlay={() => console.log("onPlay")}
          // onPause={() => console.log("onPause")}
          width='100%' height='100%'
        />


      </header>

      <div className="content-center sticky transition-all bg-gray-600 text-gray-100 
      flex items-stretch content-around z-10 top-0 z-10 w-full h-10"

        style={{ backgroundColor: _SETTINGS.primaryColor }} >
        {/* <img src={ArrowDown} className="flex"
          alt="Expand player" width="40px" /> */}

        <img onClick={() => {
          // debugger
          setHeaderClicked(!headerClicked);
          // console.log(headerClicked)
        }} src={MusicWave} alt="wave" className="self-stretch " />
      </div>

      <div className="relative min-h-screen md:flex" data-dev-hint="container">
        <aside id="sidebar" className=" overflow-y-auto 
        bg-gray-800 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 
        absolute inset-y-0 left-0 transform md:relative md:translate-x-0 
        transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between 
        overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 
        for visually inset the navigation">

          <div className="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">
            <a href="#" className="text-white flex items-center space-x-2 px-4" title="Your App is cool">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span className="text-2xl font-extrabold whitespace-nowrap truncate">Chill Playlist</span>
            </a>

            <nav data-dev-hint="main navigation">
              <span className='flex py-0 
                hover:bg-slate-500 
                hover:text-white 
                transition-colors 
                text-yellow-200 
                bg-slate-700 
                text-center items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700'>
                <PlaylistIcon color="yellow" size="26px" />
                <span className='font-size-xxs'>{playing.title}</span>
                <span ref={NextHoverTarget} data-tip="Next" className="pt-1 inline-block pl-10"
                  onClick={() => {
                    handleNext()
                  }}>
                  {/* <PlayerController /> */}
                  <NextIcon isHover={NextHovered} size={_SETTINGS.playerIconSize} />
                  <ReactTooltip />
                </span>
                <span ref={ShuffleHoverTarget} data-tip={`${isShuffle ? "Un-shuffle" : "Shuffle"} Playlist`} className="pt-1"
                  onClick={() => {
                    setIsShuffle(!isShuffle)
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
                  <Shuffle isHover={ShuffleHovered}
                    isShuffle={isShuffle} size={_SETTINGS.playerIconSize}></Shuffle> </span>
              </span>
              <PlayListItems playlist={playlist} playing={playing} />
            </nav>
          </div>

          <nav data-dev-hint="second-main-navigation or footer navigation">
            <a href="#" className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              <span>Enjoy the music</span>
            </a>

          </nav>
        </aside>
        <main id="content" className="flex-1 p-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            <Playlist playlist={playlist} size="200px" setPlayUrl={setPlaying} playing={true} />

          </div>
        </main>

      </div >
      <footer className="py-0 
      hover:bg-slate-500 
      hover:text-white 
      transition-colors 
      text-yellow-200 
      bg-slate-700 
      text-center 
      ">
        ChillOut - Ambient - World - Indie - space-rock - DreamPop - Electronic - Psybient - Goa
      </footer>
    </>
  );
}

export default App;
