// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';

// const TrendingMusic = () => {
//   const featureAlbum = {
//     imageUrl: 'https://via.placeholder.com/600x600', // Replace with actual image URL
//     title: 'New Album from Nouvelle',
//     artist: 'Nouvelle'
//   };

//   const albums = [
//     // Add dummy data or your actual data array
//     { imageUrl: 'https://via.placeholder.com/200', title: 'Pull Up', artist: 'Summerella' },
//     { imageUrl: 'https://via.placeholder.com/200', title: 'Fireworks', artist: 'Kygo' },
//     { imageUrl: 'https://via.placeholder.com/200', title: 'I Wanna Be In the Cavalry', artist: 'Jeremy Scott' },
//     { imageUrl: 'https://via.placeholder.com/200', title: 'What A Time To Be Alive', artist: 'Judith Garcia' },
//   ];

//   return (
//     <Container fluid>
//       <Row>
//         <Col sm={6}>
//           <Card>
//             <Card.Img variant="top" src={featureAlbum.imageUrl} />
//             <Card.Body>
//               <Card.Title>{featureAlbum.title}</Card.Title>
//               <Card.Text>{featureAlbum.artist}</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
        
//         <Col sm={6}>
//           <Row>
//             {albums.slice(0, 2).map((album, index) => (
//               <Col xs={6} key={index}>
//                 <Card>
//                   <Card.Img variant="top" src={album.imageUrl} />
//                   <Card.Body>
//                     <Card.Title>{album.title}</Card.Title>
//                     <Card.Text>{album.artist}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//           <Row>
//             {albums.slice(2, 4).map((album, index) => (
//               <Col xs={6} key={index}>
//                 <Card>
//                   <Card.Img variant="top" src={album.imageUrl} />
//                   <Card.Body>
//                     <Card.Title>{album.title}</Card.Title>
//                     <Card.Text>{album.artist}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default TrendingMusic;


import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsPlayCircle } from 'react-icons/bs';
import './Trending.css'

const TrendingMusic = () => {

    const featureAlbum = {
    imageUrl: 'https://chimerical-puffpuff-68664f.netlify.app/images/c1.jpg', // Replace with actual image URL
    title: 'New Album from Nouvelle',
    artist: 'Nouvelle'
  };

  const albums = [
    // Add dummy data or your actual data array
    { imageUrl: 'https://chimerical-puffpuff-68664f.netlify.app/images/b4.jpg', title: 'Pull Up', artist: 'Summerella' },
    { imageUrl: 'https://chimerical-puffpuff-68664f.netlify.app/images/b1.jpg', title: 'Fireworks', artist: 'Kygo' },
    { imageUrl: 'https://chimerical-puffpuff-68664f.netlify.app/images/b2.jpg', title: 'I Wanna Be In the Cavalry', artist: 'Jeremy Scott' },
    { imageUrl: 'https://chimerical-puffpuff-68664f.netlify.app/images/b3.jpg', title: 'What A Time To Be Alive', artist: 'Judith Garcia' },
  ];
  // ... (your featureAlbum and albums array as before)

  return (
    <Container fluid className="px-0 trending-music">
      <Row noGutters>
        <Col sm={6} className="p-0" >
          <Card className="text-white feature">
            <Card.Img src={featureAlbum.imageUrl} alt="Feature album image" />
            <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
              <div className="text-center">
                <BsPlayCircle size={70} className="play-icon" />
                <Card.Title>{featureAlbum.title}</Card.Title>
                <Card.Text>{featureAlbum.artist}</Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>

        <Col sm={6} className="p-0">
          <Row className="gx-0 gy-0">
            {albums.slice(0, 2).map((album, index) => (
              <Col xs={6} key={index} className="p-0">
                <Card>
                  <Card.Img variant="top" src={album.imageUrl} />
                  <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                    <div className="text-center">
                      <BsPlayCircle size={70} className="play-icon" />
                      <Card.Title>{album.title}</Card.Title>
                      <Card.Text>{album.artist}</Card.Text>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="gx-0 gy-0">
            {albums.slice(2, 4).map((album, index) => (
              <Col xs={6} key={index} className="p-0">
                <Card>
                  <Card.Img variant="top" src={album.imageUrl} />
                  <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                    <div className="text-center">
                      <BsPlayCircle size={70} className="play-icon" />
                      <Card.Title>{album.title}</Card.Title>
                      <Card.Text>{album.artist}</Card.Text>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>


        
        
      </Row>
    </Container>
  );
};

export default TrendingMusic;

