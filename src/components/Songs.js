import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { firestore } from '../firebaseConfig'; // Adjust the import path to your Firebase configuration

const Songs = () => {
  const [songs, setSongs] = useState([]);

  const fetchSongs = async () => {
    const songsCollectionRef = collection(firestore, 'songs');
    const q = query(songsCollectionRef, orderBy("uploadDate", "desc")); // Optional: Query to order the results by upload date
    const querySnapshot = await getDocs(q);
  
    const songs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
  
    return songs;
  };
  

  useEffect(() => {
    const getSongs = async () => {
      const fetchedSongs = await fetchSongs();
      console.log(fetchedSongs);
      setSongs(fetchedSongs);
    };

    getSongs();
  }, []);

  return (
    <div>
      {songs.map((song) => (
        <div key={song.id}>
          <h3>{song.name}</h3>
          <p>Uploaded by: {song.username}</p>
          <p>Upload date: {song.uploadDate.toDate().toLocaleDateString()}</p> {/* Convert Firestore Timestamp to JavaScript Date */}
          <img src={song.imageUrl} alt={`${song.name} cover`} style={{ width: 100, height: 100 }} />
          <audio controls src={song.audioUrl}>Your browser does not support the audio element.</audio>
        </div>
      ))}
    </div>
  );
};

export default Songs;
