'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const BlurReveal = ({ children, className }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        filter: 'blur(0px)',
        transition: { duration: 0.5, ease: 'easeOut' }
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: 'blur(15px)' }}
      animate={controls}
      className={className}
    >
      {children && children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10, filter: 'blur(15px)' }}
          animate={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
              duration: 0.5,
              ease: 'easeOut',
              delay: index * 0.3, // Sequential delay based on index
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BlurReveal;
