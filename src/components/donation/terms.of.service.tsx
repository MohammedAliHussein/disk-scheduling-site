import { motion } from 'framer-motion';

import Title from '../config/title';
import Close from '../config/close';
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
      <div className="absolute z-10 flex flex-col gap-3 items-center justify-start outline outline-1 outline-[rgba(255,255,255,0.1)] max-w-[90%] w-[25rem] h-fit p-5 bg-[rgb(8,8,8)]">
        <Close handleClick={props.handleClick} />
        <Title title={'Terms of service'} />
        <p className="text-center text-[0.8rem] text-[rgba(225,225,225,0.5)] leading-[1.25rem]">
          By continuing with the donation to support the continued availability
          of seektime.app, I accept that the creators of seektime.app will not
          be held liable for any mistake as a result of me, the donator.
        </p>
        <p
          className="
          text-[rgb(255,255,255)] 
          text-[0.7rem] 
          outline 
          outline-1 
          outline-[rgba(255,255,255,0.25)] 
          hover:bg-[rgba(255,255,255,1)]
          hover:text-[rgba(0,0,0,0.8)]
          transition
          out-circ
          py-[0.2rem]
          px-[0.4rem]
          cursor-pointer"
        >
          I have read, accept and want to continue
        </p>
      </div>
    </motion.div>
  );
};

export default Terms;
