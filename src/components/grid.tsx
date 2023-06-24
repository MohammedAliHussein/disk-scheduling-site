import { useEffect, useRef, useState } from 'react';

import * as d3 from 'd3';

import Lines from './grid/lines';
import Points from './grid/points';
import Guides from './grid/guides';

import {
  BOUNDARY_MARGIN,
  ELEMENT_DRAW_DELAY,
  ELEMENT_DRAW_DURATION,
  appendAxis,
  clearData,
  createGuides,
  createLines,
  createPoints,
} from '@/lib/grid';

const Grid = ({ diskRequests, cylinders, reset, animate }) => {
  const ref = useRef(null);
  const [guides, setGuides] = useState([]); //dashed lines
  const [points, setPoints] = useState([]); //points denoting cylinder
  const [lines, setLines] = useState([]); //connections between

  useEffect(() => {
    const svg = d3.select(ref.current);
    const end = ref.current.clientWidth - BOUNDARY_MARGIN;

    clearData(svg);

    const axis = d3
      .scaleLinear()
      .domain([0, cylinders])
      .range([BOUNDARY_MARGIN, end]);

    const guides = createGuides(end, diskRequests, cylinders, ref);
    const points = createPoints(end, diskRequests, cylinders, ref);
    const lines = createLines(end, diskRequests, cylinders, ref, d3);

    appendAxis(axis, svg, d3);
    setPoints(points);
    setGuides(guides);
    setLines(lines);
  }, [diskRequests, cylinders]);

  return (
    <svg ref={ref} id="grid" className="h-full w-11/12 grow">
      {!reset && (
        <>
          <Guides guides={guides} />
          <Points
            points={points}
            animate={animate}
            ELEMENT_DRAW_DELAY={ELEMENT_DRAW_DELAY}
            ELEMENT_DRAW_DURATION={ELEMENT_DRAW_DURATION}
            diskRequests={diskRequests}
          />
          <Lines
            lines={lines}
            animate={animate}
            ELEMENT_DRAW_DELAY={ELEMENT_DRAW_DELAY}
            ELEMENT_DRAW_DURATION={ELEMENT_DRAW_DURATION}
          />
        </>
      )}
    </svg>
  );
};

export default Grid;
