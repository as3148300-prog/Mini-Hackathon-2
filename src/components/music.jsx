import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import music from '../assets/music/bg.mp3'

const MusicToggle = () => {
  const audioRef = useRef(null);
  const fadeInterval = useRef(null);

  // ON by default
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const savedState = localStorage.getItem("site-music-playing");

    if (savedState !== null) {
      setIsPlaying(savedState === "true");
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    clearInterval(fadeInterval.current);

    if (isPlaying) {
      audio.volume = 0;

      audio.play().catch((err) => {
        console.log("Autoplay blocked by browser:", err);
      });

      fadeInterval.current = setInterval(() => {
        if (audio.volume < 0.35) {
          audio.volume = Math.min(audio.volume + 0.02, 0.35);
        } else {
          clearInterval(fadeInterval.current);
        }
      }, 60);
    } else {
      fadeInterval.current = setInterval(() => {
        if (audio.volume > 0.02) {
          audio.volume = Math.max(audio.volume - 0.02, 0);
        } else {
          audio.pause();
          clearInterval(fadeInterval.current);
        }
      }, 60);
    }

    localStorage.setItem("site-music-playing", isPlaying);

    return () => clearInterval(fadeInterval.current);
  }, [isPlaying]);

  const toggleMusic = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <>
      <button
        className="music-toggle"
        onClick={toggleMusic}
        aria-label="Toggle music"
        title={isPlaying ? "Sound On" : "Sound Off"}
      >
        {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>

      <audio ref={audioRef} loop preload="auto">
        <source src={music} type="audio/mpeg" />
      </audio>
    </>
  );
};

export default MusicToggle;