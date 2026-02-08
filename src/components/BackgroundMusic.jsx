import React, { useEffect, useRef, useState } from 'react';
import { FaMusic, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Try to auto-play
    const playMusic = async () => {
      try {
        audio.volume = 0.5;
        await audio.play();
        setIsPlaying(true);
        setShowHint(false);
      } catch (e) {
        console.log("Autoplay prevented:", e);
        setIsPlaying(false);
        setShowHint(true);
      }
    };

    playMusic();

    // Also try to bind to first click anywhere if not playing
    const enableAudio = () => {
      if (audio && audio.paused) {
        audio.play().then(() => {
          setIsPlaying(true);
          setShowHint(false);
        }).catch(e => console.log(e));
      }
    };

    if (!isPlaying) {
      document.addEventListener('click', enableAudio, { once: true });
    }

    return () => document.removeEventListener('click', enableAudio);

  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
        setShowHint(false);
      }
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 1000, display: 'flex', alignItems: 'center', gap: '10px' }}>
      <audio
        ref={audioRef}
        loop
        onLoadedMetadata={() => {
          if (audioRef.current) {
            audioRef.current.currentTime = 15;
          }
        }}
      >
        <source src="/song.mp3" type="audio/mpeg" />
      </audio>

      <AnimatePresence>
        {showHint && !isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              color: '#ff4d6d',
              fontWeight: 'bold',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          >
            Tap for music 🎵
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={togglePlay}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={!isPlaying ? { scale: [1, 1.1, 1], boxShadow: "0 0 10px rgba(255, 77, 109, 0.5)" } : {}}
        transition={!isPlaying ? { repeat: Infinity, duration: 2 } : {}}
        style={{
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(5px)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          boxShadow: '0 4px 15px rgba(255, 77, 109, 0.3)',
          color: '#ff4d6d',
          cursor: 'pointer'
        }}
      >
        {isPlaying ? <FaVolumeUp size={24} /> : <FaMusic size={24} />}
      </motion.button>
    </div>
  );
};

export default BackgroundMusic;
