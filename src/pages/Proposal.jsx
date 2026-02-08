import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaHeartBroken, FaHeart } from 'react-icons/fa';

const Proposal = () => {
  const [noCount, setNoCount] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleNoHover = () => {
    const x = Math.random() * 200 - 100; // -100 to 100
    const y = Math.random() * 200 - 100;
    setPosition({ x, y });
    setNoCount(noCount + 1);
  };

  const handleYesClick = () => {
    navigate('/success');
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

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
        textAlign: 'center'
      }}
    >
      <div className="glass-card" style={{ maxWidth: '600px' }}>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ fontSize: '4rem', color: '#ff4d6d', marginBottom: '1rem' }}
        >
          <FaHeart />
        </motion.div>

        <h1 className="romantic-font" style={{ fontSize: '4rem', marginBottom: '2rem' }}>Will you be my Valentine?</h1>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            onClick={handleYesClick}
            style={{
              fontSize: `${noCount * 2 + 1.5}rem`,
              padding: '1rem 3rem',
              backgroundColor: '#2ecc71',
              boxShadow: '0 0 20px rgba(46, 204, 113, 0.5)'
            }}
          >
            Yes
          </motion.button>

          <motion.button
            onMouseEnter={handleNoHover}
            onClick={handleNoHover} // For mobile tap
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            style={{
              fontSize: '1.5rem',
              padding: '1rem 3rem',
              backgroundColor: '#e74c3c',
            }}
          >
            {getNoButtonText()}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Proposal;
