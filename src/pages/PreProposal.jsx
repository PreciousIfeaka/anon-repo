import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaHeartbeat } from 'react-icons/fa';

const PreProposal = () => {
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
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          style={{ fontSize: '4rem', color: '#ff4d6d', marginBottom: '1rem' }}
        >
          <FaHeartbeat />
        </motion.div>
        <h1 className="romantic-font" style={{ fontSize: '4rem' }}>And here we go...</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
          Take a deep breath. 🌹
        </p>
        <button style={{ marginTop: '2rem' }} onClick={() => navigate('/proposal')}>
          I'm Ready
        </button>
      </div>
    </motion.div>
  );
};

export default PreProposal;
