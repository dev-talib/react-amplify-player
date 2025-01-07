import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsPlayCircle, BsPauseCircle, BsSkipStartFill, BsSkipEndFill } from 'react-icons/bs';
import './MusicPlayer.css'; 
import { setPlayingSong } from '../../redux/actions/playerActions';

const MusicPlayer = () => {
  const dispatch = useDispatch();
  const currentSong = useSelector((state) => state.player.currentSong);
  const playingSong = useSelector((state) => state.player.playingSong);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(currentSong?.audioUrl || ''));
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
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
      if (playingSong && playingSong.id !== currentSong.id) {
        audio.pause();
        setIsPlaying(false);
      }
    };
  }, [currentSong?.audioUrl]);

  useEffect(() => {
    if (playingSong && playingSong.id !== currentSong.id) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [playingSong, currentSong.id]);

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      dispatch(setPlayingSong(currentSong));
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
          <img src={currentSong.imageUrl} alt={`Cover for ${currentSong.name}`} />
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
