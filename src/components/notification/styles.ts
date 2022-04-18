import { motion } from 'framer-motion';
import styled from 'styled-components';

const variants = {
  hidden: {
    left: '-100vh',
  },
  visible: {
    left: '0',
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 10,
      stiffness: 40,
    },
  },
};

export const StyledNotification = styled(motion.div).attrs(() => ({
  variants,
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
}))`
  position: fixed;
  top: 0;
  left: 0;
  border: 1px solid #f44;
  background-color: #222;
  border-radius: 6px;
  text-align: center;
  color: #f44;
  padding: 1em 0.5em;
  margin: 1rem;
`;
