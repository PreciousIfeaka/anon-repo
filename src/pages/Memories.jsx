import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const memories = [
  {
    id: 1,
    image: "https://res.cloudinary.com/debi5d65m/image/upload/v1770551740/val_img_3_u1wkaw.jpg",
    message: "You make every day of my life brighter. There is nothing more I want"
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/debi5d65m/image/upload/v1770551742/val_img_1_r50jgl.jpg",
    message: "Your smile is my favorite view. I will never stop longing for it"
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/debi5d65m/image/upload/v1770551742/val_img_2_lszvm1.jpg",
    message: "Remember the day we took this picure? Twas our first date. I want to enjoy many more with you alone"
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/debi5d65m/image/upload/v1770551745/val_img_0_vtcsiq.jpg",
    message: "Together forever my baby"
  },
];

const Memories = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const nextMemory = () => {
    if (index === memories.length - 1) {
      navigate('/future-promise');
    } else {
      setIndex(index + 1);
    }
  };

  const prevMemory = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
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
        padding: '1rem'
      }}
    >
      <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Our Memories</h1>
      <div style={{ position: 'relative', width: '100%', maxWidth: '500px', height: '400px', marginBottom: '2rem' }}>
        <AnimatePresence mode='wait'>
          <motion.div
            key={index}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img
              src={memories[index].image}
              alt="Memory"
              style={{
                width: '100%',
                maxHeight: '250px',
                objectFit: 'cover',
                borderRadius: '15px',
                marginBottom: '1rem'
              }}
            />
            <p className="romantic-font" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{memories[index].message}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        {index > 0 && (
          <button onClick={prevMemory} style={{ background: '#ccc', color: '#333' }}>
            <FaChevronLeft /> Back
          </button>
        )}
        <button onClick={nextMemory} style={{ padding: '1rem 3rem' }}>
          {index === memories.length - 1 ? "Next Question..." : <FaChevronRight />}
        </button>
      </div>
    </motion.div>
  );
};

export default Memories;
