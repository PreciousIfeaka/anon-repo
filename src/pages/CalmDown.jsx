import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGrinSquintTears, FaHeart } from 'react-icons/fa';

const CalmDown = () => {
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
        <div style={{ fontSize: '4rem', color: '#ff4d6d', marginBottom: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <motion.span
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <FaGrinSquintTears />
          </motion.span>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaHeart />
          </motion.span>
        </div>
        <h1 className="romantic-font" style={{ fontSize: '3.5rem' }}>Haha!</h1>
        <p>I know you're longing to know the question, but do the calms.</p>
        <div style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
          😂 ❤️
        </div>
        <button style={{ marginTop: '2rem' }} onClick={() => navigate('/pre-proposal')}>
          Okay...
        </button>
      </div>
    </motion.div>
  );
};

export default CalmDown;
