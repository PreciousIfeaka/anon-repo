import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Math.random(),
        left: Math.random() * 100,
        animationDuration: Math.random() * 5 + 3, // 3s to 8s
        size: Math.random() * 20 + 10,
        delay: Math.random() * 2,
        color: Math.random() > 0.5 ? '#ff4d6d' : '#ffccd5'
      };
      setHearts((prev) => [...prev.slice(-15), newHeart]); // Keep max 15 hearts
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="heart-bg">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '110vh', x: `${heart.left}vw`, opacity: 0 }}
          animate={{
            y: '-10vh',
            opacity: [0, 1, 0] // Fade in and out
          }}
          transition={{
            duration: heart.animationDuration,
            ease: "linear",
            delay: heart.delay
          }}
          style={{
            position: 'absolute',
            fontSize: heart.size,
            color: heart.color,
            pointerEvents: 'none',
          }}
        >
          <FaHeart />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
