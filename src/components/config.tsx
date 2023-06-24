import { motion } from 'framer-motion';

import Algorithms from './config/algorithms';
import Direction from './config/direction';
import Cylinders from './config/cylinders';
import Requests from './config/requests';
import Confirm from './config/confirm';
import Background from './config/background';
import Close from './config/close';
import Title from './config/title';
import Animate from './config/animate';

const Config = props => {
  const handleClick = () => {
    props.setConfigOpen(!props.configOpen);
  };

  return (
    <motion.div
      className="absolute w-screen h-full flex items-center justify-center bg-[rgba(0,0,0,0.5)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Background handleClick={handleClick} />
      <div className="absolute z-10 flex flex-col gap-3 items-center justify-start outline outline-1 outline-[rgba(255,255,255,0.1)] w-[18rem] h-fit p-5 bg-[rgb(8,8,8)]">
        <Close handleClick={handleClick} />
        <Title />
        <Algorithms
          algorithm={props.algorithm}
          setAlgorithm={props.setAlgorithm}
        />
        <Direction
          direction={props.direction}
          algorithm={props.algorithm}
          setDirection={props.setDirection}
        />
        <Animate animate={props.animate} setAnimate={props.setAnimate} />
        <Cylinders
          cylinders={props.cylinders}
          setCylinders={props.setCylinders}
        />
        <Requests
          diskRequests={props.diskRequests}
          setDiskRequests={props.setDiskRequests}
        />
        <Confirm handleConfirmConfig={props.handleConfirmConfig} />
      </div>
    </motion.div>
  );
};

export default Config;
