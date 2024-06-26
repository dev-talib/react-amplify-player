import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './MusicPlayer.css'; // Make sure to create this CSS file

const MusicPlayer = () => {
  const [song] = useState({
    title: "Song Title",
    artist: "Artist Name",
    albumCover: "path-to-album-cover.jpg", // Replace with your image path
    audioUrl: "https://firebasestorage.googleapis.com/v0/b/amplify-58fe7.appspot.com/o/audio%2FMere-Samne-Wali(PagalWorld).mp3?alt=media&token=057cc56a-60f0-43a9-aad4-8e222555b8bf" // Replace with your audio file path
  });

  return (
    <footer className="player-footer">
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={1} className="player-cover">
            <Image src={song.albumCover} thumbnail fluid />
          </Col>
          <Col xs={11} className="player-controls">
            <div className="player-info d-none d-md-block">
              <h5>{song.title}</h5>
              <p>{song.artist}</p>
            </div>
            <audio controls className="player-audio" src={song.audioUrl}>
              Your browser does not support the audio element.
            </audio>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MusicPlayer;
