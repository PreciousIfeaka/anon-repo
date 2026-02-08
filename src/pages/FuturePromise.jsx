import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaInfinity } from 'react-icons/fa';

const FuturePromise = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <div className="glass-card">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ fontSize: '4rem', color: '#ff4d6d', marginBottom: '1rem' }}
        >
          <FaInfinity />
        </motion.div>
        <h1 className="romantic-font" style={{ fontSize: '3rem' }}>Our Future</h1>
        <p>We will have more to experience in our lifetime.</p>
        <button style={{ marginTop: '2rem' }} onClick={() => navigate('/calm-down')}>
          Next Question
        </button>
      </div>
    </motion.div>
  );
};

export default FuturePromise;
