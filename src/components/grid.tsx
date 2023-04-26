import { useEffect, useRef, useState } from "react";
import { circOut, motion } from "framer-motion";
import * as d3 from "d3";

const Grid = ({ diskRequests, cylinders, reset }) => {
  const BOUNDARY_MARGIN = 20;
  const ELEMENT_DRAW_DURATION = 0.5;
  const ELEMENT_DRAW_DELAY = (i: Number) => (ELEMENT_DRAW_DURATION * i) + 0.2;

  const ref = useRef(null);

  const [guides, setGuides] = useState([]); //dashed lines 
  const [points, setPoints] = useState([]); //points denoting cylinder
  const [lines, setLines] = useState([]); //connections between 


  useEffect(() => {
    const svg = d3.select(ref.current);
    const end = ref.current.clientWidth - BOUNDARY_MARGIN; 

    clearData(svg);

    const axis = d3.scaleLinear().domain([0, cylinders]).range([BOUNDARY_MARGIN, end]);

    const guides = createGuides(end); 
    const points = createPoints(end);
    const lines = createLines(end);

    appendAxis(axis, svg);
    setPoints(points);
    setGuides(guides);
    setLines(lines);

  }, [diskRequests, cylinders]);

  const clearData = (svg) => {
    svg.select(".axis").remove();
  }

  const appendAxis = (axis, svg) => {
    svg.append("g").attr("class", "axis").style("color", "white").style("opacity", "0.8").call(d3.axisBottom(axis));
  }

  const createGuides = (end) => {
    const guides = [];

    for (let i = 0; i < diskRequests.length; i++) { 
      const x = end * (diskRequests[i] / cylinders);
      const y = (((ref.current.clientHeight - 30) / diskRequests.length) * i) + 30;
      const guide = [[BOUNDARY_MARGIN, y], [end, y]]
      guides.push(guide);
    }

    return guides;
  }

  const createPoints = (end) => {
    const points = [];

    for (let i = 0; i < diskRequests.length; i++) { 
      let x = (end * (diskRequests[i] / cylinders));
      const y = (((ref.current.clientHeight - 30) / diskRequests.length) * i) + 30;

      if (x < BOUNDARY_MARGIN) x = BOUNDARY_MARGIN; 

      points.push([x, y])
    }

    return points;
  }

  const createLines = (end) => {
    const lines = [];
    const individuals = [];

    for (let i = 0; i < diskRequests.length; i++) { 
      let x = end * (diskRequests[i] / cylinders);
      const y = (((ref.current.clientHeight - 30) / diskRequests.length) * i) + 30;

      if (x < BOUNDARY_MARGIN) x = BOUNDARY_MARGIN; 

      lines.push([x, y])
    }

    for (let i = 0; i < lines.length - 1; i++) {
      if (lines.length == 0) break;

      const twoPoints = [lines[i], lines[i + 1]];
      const line = (d3.line())(twoPoints);
      individuals.push(line); 

      if (lines.length == 1) break;
    }

    return individuals;    
  }

  return (
    <svg ref={ref} id="grid" className="h-full w-10/12 min-h-[500px] min-w-[700px] grow">
      {
        !reset 
        && 
        <>
          { guides.map((guide) => <line key={guide[0][1]} stroke="white" strokeDasharray={"3px, 3px"} strokeWidth={"1px"} opacity={"0.1"} x1={guide[0][0]} y1={guide[0][1]} x2={guide[1][0]} y2={guide[1][1]} />) }
          { 
            points.map((point, i) => 
              <motion.g
                id="point-g"
                key={point}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: ELEMENT_DRAW_DURATION, ease: circOut, delay: ELEMENT_DRAW_DELAY(i)  }}  
              >
                <circle key={point} r="1.5" cx={point[0]} cy={point[1]} fill="white" stroke="white"/>
                <text fill="white" fontSize={"0.6rem"} dx={point[0] + 5} dy={point[1]} >{diskRequests[i]}</text>
              </motion.g> 
            ) 
          }
          { 
            lines.map((line, i) => 
              <motion.path key={i} d={line} fill="none" strokeDasharray={1} stroke="rgba(255,255,255,0.4)" id="line-path"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: ELEMENT_DRAW_DURATION, ease: circOut, delay: ELEMENT_DRAW_DELAY(i) }}
              />
            ) 
          }
        </>
      }
    </svg>
  );
}

export default Grid;