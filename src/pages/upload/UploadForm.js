// import React, { useState } from 'react';
// import { getAuth } from 'firebase/auth';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';

// const UploadForm = () => {
//   const [songName, setSongName] = useState('');
//   const [audioFile, setAudioFile] = useState(null);
//   const [imageFile, setImageFile] = useState(null);
//   const auth = getAuth();
//   const storage = getStorage();
//   const firestore = getFirestore();

//   const handleUpload = async () => {
//     if (!auth.currentUser) return alert('Please sign in to upload songs.');

//     const audioRef = ref(storage, `audio/${audioFile.name}`);
//     const imageRef = ref(storage, `images/${imageFile.name}`);

//     // Upload audio
//     const audioSnapshot = await uploadBytes(audioRef, audioFile);
//     const audioUrl = await getDownloadURL(audioSnapshot.ref);

//     // Upload image
//     const imageSnapshot = await uploadBytes(imageRef, imageFile);
//     const imageUrl = await getDownloadURL(imageSnapshot.ref);

//     // Save song metadata to Firestore
//     await addDoc(collection(firestore, 'songs'), {
//       name: songName,
//       audioUrl,
//       imageUrl,
//       username: auth.currentUser.email, // Or use a username if you have one set up
//       uploadDate: new Date()
//     });

//     alert('Song uploaded successfully!');
//   };

//   return (
//     <div>
//       <input type="text" value={songName} onChange={(e) => setSongName(e.target.value)} placeholder="Song Name" />
//       <input type="file" placeholder="select audio" onChange={(e) => setAudioFile(e.target.files[0])} />
//       <input type="file" placeholder="select thumbnail" onChange={(e) => setImageFile(e.target.files[0])} accept="image/*" />
//       <button onClick={handleUpload}>Upload Song</button>
//     </div>
//   );
// };

// export default UploadForm;

import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { Button, Form, Container, Row, Col, Spinner } from 'react-bootstrap';
import CategorySelect from '../../components/CategorySelect/CategorySelect';

const UploadForm = () => {
  const [songName, setSongName] = useState('');
  const [audioFile, setAudioFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const [category, setCategory] = useState('');
  const auth = getAuth();
  const storage = getStorage();
  const firestore = getFirestore();


  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleUpload = async () => {
    if (!auth.currentUser) {
      alert('Please sign in to upload songs.');
      return;
    }

    setUploading(true);
    setUploadSuccess(false);
    setUploadError(false);

    try {
      const audioRef = ref(storage, `audio/${audioFile.name}`);
      const imageRef = ref(storage, `images/${imageFile.name}`);

      // Upload audio
      const audioSnapshot = await uploadBytes(audioRef, audioFile);
      const audioUrl = await getDownloadURL(audioSnapshot.ref);

      // Upload image
      const imageSnapshot = await uploadBytes(imageRef, imageFile);
      const imageUrl = await getDownloadURL(imageSnapshot.ref);

      // Save song metadata to Firestore
      await addDoc(collection(firestore, 'songs'), {
        name: songName,
        category,
        audioUrl,
        imageUrl,
        username: auth.currentUser.email,
        uploadDate: new Date()
      });

      setUploadSuccess(true);
      setSongName('');
      setAudioFile(null);
      setImageFile(null);
    } catch (error) {
      setUploadError(true);
      console.error('Upload error:', error);
    }

    setUploading(false);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {uploadSuccess && <div className="alert alert-success">Song uploaded successfully!</div>}
          {uploadError && <div className="alert alert-danger">Failed to upload song. Please try again.</div>}
          <CategorySelect 
            selectedCategory={category} 
            onCategoryChange={handleCategoryChange} 
            disabled={uploading} 
          />
          <Form>
            <Form.Group controlId="songName">
              <Form.Label>Song Name</Form.Label>
              <Form.Control
                type="text"
                value={songName}
                onChange={(e) => setSongName(e.target.value)}
                placeholder="Enter song name"
                disabled={uploading}
              />
            </Form.Group>

            <Form.Group controlId="audioUpload">
              <Form.Label>Audio File</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setAudioFile(e.target.files[0])}
                accept="audio/*"
                disabled={uploading}
              />
            </Form.Group>

            <Form.Group controlId="imageUpload">
              <Form.Label>Song Thumbnail</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImageFile(e.target.files[0])}
                accept="image/*"
                disabled={uploading}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleUpload} disabled={uploading}>
              {uploading ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                  <span className="ml-2">Uploading...</span>
                </>
              ) : 'Upload Song'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UploadForm;

