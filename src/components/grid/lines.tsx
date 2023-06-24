import { circOut, motion } from 'framer-motion';

const Lines = ({
  lines,
  animate,
  ELEMENT_DRAW_DURATION,
  ELEMENT_DRAW_DELAY,
}) => {
  return (
    <>
      {lines.map((line, i) =>
        animate === true ? (
          <motion.path
            key={i}
            d={line}
            fill="none"
            strokeDasharray={1}
            stroke="rgba(255,255,255,0.4)"
            id="line-path"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: ELEMENT_DRAW_DURATION,
              ease: circOut,
              delay: ELEMENT_DRAW_DELAY(i),
            }}
          />
        ) : (
          <path
            key={i}
            d={line}
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            id="line-path"
          />
        ),
      )}
    </>
  );
};

export default Lines;
