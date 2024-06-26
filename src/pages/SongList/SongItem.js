import React from 'react';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import './SongItem.css'
const SongItem = ({ song }) => {
  return (
    <ListGroup.Item as="li" className="mb-4 song-item">
      <Row>
        <Col md={4} className='shadow'>
          <Image src={song.imageUrl} alt={`${song.name} cover`} className='song-item-image' />
        </Col>
        <Col md={8}>
          <div className="song-details">
            <h5 className="song-title">{song.name}</h5>
            <p className="song-artist mb-0">{song.username}</p>
          </div>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default SongItem;
