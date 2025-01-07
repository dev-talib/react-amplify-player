import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import SongItem from './SongItem';
import SearchBar from './SearchBar'; // Import the SearchBar component
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSong } from '../../redux/actions/playerActions';
import { useNavigate } from 'react-router-dom';

const SongList = ({ songs }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentSong = useSelector((state) => state.player.currentSong);

  // Filter songs based on the search term
  const filteredSongs = songs.filter((song) =>
    song.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSongSelect = (song) => {
    dispatch(setCurrentSong(song));
    navigate('/player');
  };

  return (
    <>
      {/* Search Bar */}
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {/* Song List */}
      <ListGroup as="ul">
        {filteredSongs.map((song, index) => (
          <SongItem key={`${song.id}-${index}`} song={song} onSongSelect={handleSongSelect} />
        ))}
      </ListGroup>
    </>
  );
};

export default SongList;
