import React, { useState, useEffect } from 'react';
import SongList from '../SongList/SongList';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import NavBar from '../../components/NavBar/NavBar';
import { Container } from 'react-bootstrap';

const ChartsPage = () => {
  const [songs, setSongs] = useState([]);
  const firestore = getFirestore();

  useEffect(() => {
    const fetchSongs = async () => {
      const songsCollection = collection(firestore, 'songs');
      const songSnapshot = await getDocs(songsCollection);
      const songsList = songSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSongs(songsList);
    };

    fetchSongs();
  }, [firestore]);

  return (
    <div>
      <NavBar />  
      <SongList songs={songs} style={{ marginTop: '2rem' }}/>
    </div>
  );
};

export default ChartsPage;
