import { circOut, motion } from 'framer-motion';
import { useEffect } from 'react';

const Points = ({
  points,
  animate,
  ELEMENT_DRAW_DURATION,
  ELEMENT_DRAW_DELAY,
  diskRequests,
}) => {
  return (
    <>
      {points.map((point, i) =>
        animate === true ? (
          <motion.g
            id="point-g"
            key={point}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: ELEMENT_DRAW_DURATION,
              ease: circOut,
              delay: ELEMENT_DRAW_DELAY(i),
            }}
          >
            <circle
              key={point}
              r="1.5"
              cx={point[0]}
              cy={point[1]}
              fill="white"
              stroke="white"
            />
            <text
              fill="white"
              fontSize={'0.6rem'}
              dx={point[0] + 5}
              dy={point[1]}
            >
              {diskRequests[i]}
            </text>
          </motion.g>
        ) : (
          <g id="point-g" key={point}>
            <circle
              key={point}
              r="1.5"
              cx={point[0]}
              cy={point[1]}
              fill="white"
              stroke="white"
            />
            <text
              fill="white"
              fontSize={'0.6rem'}
              dx={point[0] + 5}
              dy={point[1]}
            >
              {diskRequests[i]}
            </text>
          </g>
        ),
      )}
    </>
  );
};

export default Points;
