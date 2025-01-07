import React from 'react';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import styles from './SongItem.module.css';

const SongItem = ({ song, onSongSelect }) => {
  return (
    <ListGroup.Item
      as="li"
      className={`mb-4 ${styles.songItem}`}
      onClick={() => onSongSelect(song)}
    >
      <Row className="align-items-center">
        <Col xs={3} className="d-flex justify-content-center">
          <Image
            src={song.imageUrl}
            alt={`${song.name} cover`}
            className={styles.songItemImage}
          />
        </Col>
        <Col xs={9}>
          <div className={styles.songDetails}>
            <h5 className={styles.songTitle}>{song.name}</h5>
            <p className={styles.songArtist}>{song.username}</p>
          </div>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default SongItem;
