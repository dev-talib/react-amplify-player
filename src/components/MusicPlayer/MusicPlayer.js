import React, { useState, useRef, useEffect } from 'react';
import { BsPlayCircle, BsPauseCircle, BsSkipStartFill, BsSkipEndFill } from 'react-icons/bs';
import './MusicPlayer.css'; 

const MusicPlayer = () => {
  const currentSong = {
    name: "Lunar Cycles",
    artist: "Sleepy Fish",
    cover: "https://chimerical-puffpuff-68664f.netlify.app/images/b3.jpg", 
    audioSrc: "https://mp3.chillhop.com/serve.php/?mp3=13014" 
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(currentSong.audioSrc));
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    // Load the metadata right away
    const audio = audioRef.current;
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const setAudioTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
    };
  }, [currentSong.audioSrc]);

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skipSongHandler = (direction) => {
    if (direction === 'forward') {
      audioRef.current.currentTime += 10; // Skip forward 10 seconds
    } else {
      audioRef.current.currentTime -= 10; // Skip back 10 seconds
    }
  };

  const handleProgressChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className="music-player">
      <div className="track-info">
        <div className="album-art">
          <img src={currentSong.cover} alt={`Cover for ${currentSong.name}`} />
        </div>
        <h2>{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
      </div>

      <div className="time-control">
        <p>{getTime(currentTime)}</p>
        <input
          type="range"
          value={currentTime}
          max={duration}
          onChange={handleProgressChange}
        />
        <p>{getTime(duration)}</p>
      </div>

      <div className="playback-controls">
        <BsSkipStartFill className="skip-back" onClick={() => skipSongHandler('backward')} />
        {isPlaying ? (
          <BsPauseCircle className="play-btn" onClick={playSongHandler} />
        ) : (
          <BsPlayCircle className="play-btn" onClick={playSongHandler} />
        )}
        <BsSkipEndFill className="skip-forward" onClick={() => skipSongHandler('forward')} />
      </div>
    </div>
  );
};

export default MusicPlayer;
