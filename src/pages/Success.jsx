import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { FaHeart } from 'react-icons/fa';

const Success = () => {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff0f3',
        overflow: 'hidden'
      }}
    >
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
      />

      <div className="glass-card" style={{ zIndex: 10, padding: '3rem', maxWidth: '600px' }}>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          style={{ fontSize: '5rem', color: '#ff4d6d', marginBottom: '2rem' }}
        >
          <FaHeart />
        </motion.div>

        <h1 className="romantic-font" style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#c9184a' }}>YAAAAY!!!</h1>
        <p className="romantic-font" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>
          I am so happy you said yes to me. I do not and will not take it for granted. I know I do not have everything it takes for the day to be memorable for you but I will try to make the simple things memorable. I really love you my Bebita. ❤️
        </p>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          See you on February 14th! <br />
          (Location: My heart)
        </p>
      </div>
    </motion.div>
  );
};

export default Success;
