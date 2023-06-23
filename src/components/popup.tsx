import { motion } from 'framer-motion';

import Title from './shared/title';
import Close from './shared/close';
import Message from './popup/message';
import Understood from './popup/understood';
import Background from './shared/background';

const Popup = props => {
  return (
    <motion.div
      className="absolute w-screen h-full flex items-center justify-center bg-[rgba(0,0,0,0.5)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Background handleClick={props.handleShowingPopup} />
      <div className="absolute z-10 flex flex-col gap-3 items-center justify-start outline outline-1 outline-[rgba(255,255,255,0.1)] max-w-[90%] w-[25rem] h-fit p-5 bg-[rgb(8,8,8)]">
        <Close handleClick={props.handleShowingPopup} />
        <Title title={'Now Accepting Donations!'} />
        <Message />
        <Understood handleClick={props.handleShowingPopup} />
      </div>
    </motion.div>
  );
};

export default Popup;
