import { motion } from 'framer-motion';
import Background from '../config/background';

const Terms = props => {
  return (
    <motion.div
      className="absolute w-screen h-full flex items-center justify-center bg-[rgba(0,0,0,0.5)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Background handleClick={props.handleClick} />
    </motion.div>
  );
};

export default Terms;
