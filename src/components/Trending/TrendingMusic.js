import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPlayCircle } from 'react-icons/bs';
import './TrendingMusic.css'; // Make sure to create and link this CSS file

const TrendingMusic = () => {
  // Dummy data for the featured album and other albums
  const featuredAlbum = {
    imageUrl: 'https://chimerical-puffpuff-68664f.netlify.app/images/c1.jpg', // Replace with actual image URL
    title: 'New Album from Nouvelle',
    artist: 'Nouvelle'
  };

  const otherAlbums = [
    { imageUrl: 'https://chimerical-puffpuff-68664f.netlify.app/images/b4.jpg', title: 'Pull Up', artist: 'Summerella' },
    { imageUrl: 'https://chimerical-puffpuff-68664f.netlify.app/images/b1.jpg', title: 'Fireworks', artist: 'Kygo' },
    { imageUrl: 'https://chimerical-puffpuff-68664f.netlify.app/images/b2.jpg', title: 'I Wanna Be In the Cavalry', artist: 'Jeremy Scott' },
    { imageUrl: 'https://chimerical-puffpuff-68664f.netlify.app/images/b3.jpg', title: 'What A Time To Be Alive', artist: 'Judith Garcia' },
  ];

  return (
    <Container fluid className="px-0 trending-music-container">
      <Row>
        <Col md={6} className="featured-album p-0">
          <div className="image-overlay-container">
            <img src={featuredAlbum.imageUrl} alt="Featured album" className="img-fluid" />
            <div className="overlay-content">
              <BsPlayCircle size={70} className="play-icon" />
              {/* <div className="album-info">
                <h2>{featuredAlbum.title}</h2>
                <p>{featuredAlbum.artist}</p>
              </div> */}
            </div>
          </div>
        </Col>

        <Col md={6}>
          <Row>
            {otherAlbums.map((album, index) => (
              <Col xs={6} key={index} className="p-0">
                <div className="image-overlay-container">
                  <img src={album.imageUrl} alt={album.title} className="img-fluid" />
                  <div className="overlay-content">
                    <BsPlayCircle size={30} className="play-icon" />
                    {/* <div className="album-info">
                      <h3>{album.title}</h3>
                      <p>{album.artist}</p>
                    </div> */}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>

      </Row>
    </Container>
  );
};

export default TrendingMusic;
