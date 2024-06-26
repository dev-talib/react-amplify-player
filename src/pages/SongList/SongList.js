import React from 'react';
import { ListGroup } from 'react-bootstrap';
import SongItem from './SongItem'; // Import the SongItem component

const SongList = ({ songs }) => {
  return (
    <ListGroup as="ul">
      {songs.map(song => (
        <SongItem key={song.id} song={song} />
      ))}
    </ListGroup>
  );
};

export default SongList;
