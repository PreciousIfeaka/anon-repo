import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaSmileWink } from 'react-icons/fa';

const SuspenseFollowUp = () => {
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
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          style={{ fontSize: '4rem', color: '#ff4d6d', marginBottom: '1rem' }}
        >
          <FaSmileWink />
        </motion.div>
        <h1 className="romantic-font" style={{ fontSize: '3.5rem' }}>I knew it!</h1>
        <p>You're thinking what I am thinking, right?</p>
        <p>So...</p>
        <button style={{ marginTop: '2rem' }} onClick={() => navigate('/memories')}>
          Here we go!
        </button>
      </div>
    </motion.div>
  );
};

export default SuspenseFollowUp;
