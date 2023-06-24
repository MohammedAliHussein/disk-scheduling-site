import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import Lines from './grid/lines';
import Points from './grid/points';
import Guides from './grid/guides';

const Grid = ({ diskRequests, cylinders, reset, animate }) => {
  const BOUNDARY_MARGIN = 20;
  const ELEMENT_DRAW_DURATION = 0.5;
  const ELEMENT_DRAW_DELAY = (i: Number) => ELEMENT_DRAW_DURATION * i + 0.2;

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

    const guides = createGuides(end);
    const points = createPoints(end);
    const lines = createLines(end);

    appendAxis(axis, svg);
    setPoints(points);
    setGuides(guides);
    setLines(lines);
  }, [diskRequests, cylinders]);

  const clearData = svg => {
    svg.select('.axis').remove();
  };

  const appendAxis = (axis, svg) => {
    svg
      .append('g')
      .attr('class', 'axis')
      .style('color', 'white')
      .style('opacity', '0.8')
      .call(d3.axisBottom(axis));
  };

  const createGuides = end => {
    const guides = [];

    for (let i = 0; i < diskRequests.length; i++) {
      const x = end * (diskRequests[i] / cylinders);
      const y =
        ((ref.current.clientHeight - 30) / diskRequests.length) * i + 30;
      const guide = [
        [BOUNDARY_MARGIN, y],
        [end, y],
      ];
      guides.push(guide);
    }

    return guides;
  };

  const createPoints = end => {
    const points = [];

    for (let i = 0; i < diskRequests.length; i++) {
      let x = end * (diskRequests[i] / cylinders);
      const y =
        ((ref.current.clientHeight - 30) / diskRequests.length) * i + 30;

      if (x < BOUNDARY_MARGIN) x = BOUNDARY_MARGIN;

      points.push([x, y]);
    }

    return points;
  };

  const createLines = end => {
    const lines = [];
    const individuals = [];

    for (let i = 0; i < diskRequests.length; i++) {
      let x = end * (diskRequests[i] / cylinders);
      const y =
        ((ref.current.clientHeight - 30) / diskRequests.length) * i + 30;

      if (x < BOUNDARY_MARGIN) x = BOUNDARY_MARGIN;

      lines.push([x, y]);
    }

    for (let i = 0; i < lines.length - 1; i++) {
      if (lines.length == 0) break;

      const twoPoints = [lines[i], lines[i + 1]];
      const line = d3.line()(twoPoints);
      individuals.push(line);

      if (lines.length == 1) break;
    }

    return individuals;
  };

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
