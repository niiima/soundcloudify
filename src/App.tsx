import logo from './logo.svg';
import db from './data/playlist.json';
import { Playlist } from './components/Playlist';
function App() {
  return (
    <div className="App">


      <Playlist array={db} size="300px" />

    </div>
  );
}

export default App;
