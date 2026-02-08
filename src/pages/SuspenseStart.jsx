import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaQuestion } from 'react-icons/fa';

const SuspenseStart = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <div className="glass-card">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ fontSize: '4rem', color: '#ff4d6d', marginBottom: '1rem' }}
        >
          <FaQuestion />
        </motion.div>
        <h1 className="romantic-font" style={{ fontSize: '3rem' }}>Shhh...</h1>
        <p>I am sure you don't expect what is coming...</p>
        <p>Can you take a guess?</p>
        <button style={{ marginTop: '2rem' }} onClick={() => navigate('/intro')}>
          Take a Guess
        </button>
      </div>
    </motion.div>
  );
};

export default SuspenseStart;
