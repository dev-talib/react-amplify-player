import React from 'react'
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer'
import NavBar from '../../components/NavBar/NavBar';

function Player() {
  
    const dummySongData = {
        name: "Lunar Cycles",
        artist: "Sleepy Fish",
        cover: "https://chimerical-puffpuff-68664f.netlify.app/images/b3.jpg", // Replace with actual image URL
        audioSrc: "https://mp3.chillhop.com/serve.php/?mp3=13014" // Replace with actual audio file URL
    };  

  return (
    <div>
       <NavBar/>
       <MusicPlayer currentSong={dummySongData} />
    </div>
  )
}

export default Player