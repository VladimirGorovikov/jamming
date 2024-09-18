import { useState } from 'react';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import SearchButton from './components/searchButton/SearchButton';
import SearchResults from './components/searchResults/SearchResults';
import Playlist from './components/playlist/Playlist';

/* Mock data */
const tracks = [
  {
    name: 'Sorry',
    artist: 'Justin Bieber',
    album: 'IDK'
  },
  {
    name: 'Hello',
    artist: 'Adelle',
    album: 'IDK'
  }
]

function App() {
  // Stores the value entered into the search bar
  const [searchTerm, setSearchTerm] = useState('');

  // Stores the search results
  const [searchResults, setSearchResults] = useState([]);
  // Updates the search results when search button is pressed
  // Searches by name, artist or album name
  const handleSearchSubmit = () => {
    // Check if search term is empty
    if (searchTerm === '') {
      setSearchResults([]);
      return;
    }

    setSearchResults(tracks.filter((track) => (track.name.includes(searchTerm) || 
                              track.artist.includes(searchTerm) || 
                              track.album.includes(searchTerm))));
  }

  // Stores tracks added to playlist
  const [playlist, setPlaylist] = useState([]);
  // Adds a track to the playlist
  const addTrackToPlaylist = (track) => {
    setPlaylist([track, ...playlist]);
    console.log(playlist);
  }
  // Removes a track from the playlist
  const removeTrackFromPlaylist = () => {

  }

  return (
    <div className="App">
      <h1>Jamming Playlist Creator</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <SearchButton handleSubmit={handleSearchSubmit} />
      <SearchResults trackList={searchResults} addTrackToPlaylist={addTrackToPlaylist} />
      <Playlist trackList={playlist} />
    </div>
  );
}

export default App;
