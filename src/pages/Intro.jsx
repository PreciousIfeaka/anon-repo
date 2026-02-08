import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaEnvelopeOpenText } from 'react-icons/fa';

const Intro = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <motion.div
        className="glass-card"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ cursor: 'pointer', maxWidth: '400px' }}
        onClick={() => navigate('/suspense-followup')}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ fontSize: '5rem', color: '#ff4d6d', marginBottom: '1rem' }}
        >
          <FaEnvelopeOpenText />
        </motion.div>
        <h1>For my Bebita 💗</h1>
        <p>I have something special to show you. Please hang on.</p>
        <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>
          (Click to open)
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Intro;
