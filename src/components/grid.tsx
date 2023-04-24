import { useEffect, useRef, useState } from "react";
import { circOut, motion } from "framer-motion";
import * as d3 from "d3";

const Grid = ({ diskRequests, cylinders }) => {
  const ELEMENT_DRAW_DURATION = 0.5;
  const ELEMENT_DRAW_DELAY = (i) => (ELEMENT_DRAW_DURATION * i) + 0.2;

  const grid = useRef(null);
  const [lines, setLines] = useState([[]]);
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const selection = d3.select(grid.current)
    const max = grid.current.clientWidth - 10; 

    const x = d3.scaleLinear()
                .domain([0, cylinders])
                .range([10, max]); //Set top axis

    selection.append("g")
             .style("color", "white")
             .style("opacity", "0.5")
             .call(d3.axisBottom(x)); //Append top axis

    let _lines = [];
    let _circles = [];

    for (let i = 0; i < diskRequests.length; i++) { //Draw points and push positions for later animating 
      const totalWidth = max;
      const x = totalWidth * (diskRequests[i] / cylinders);
      const y = (((grid.current.clientHeight - 30) / diskRequests.length) * i) + 30; //+30 and -30 to make sure first horizontal line is below axis numbers

      appendHorizontalLine(selection, y, max)

      _lines.push([x, y]);
      _circles.push([x, y])
    }

    setCircles(_circles);
    setLines(createIndividualLines(_lines));
  }, [diskRequests, cylinders]);


  const createIndividualLines = (_lines) => {
    let newLines = [];
    for (let i = 0; i < _lines.length - 1; i++) {
      if (_lines.length == 0) break;

      const twoPoints = [_lines[i], _lines[i + 1]];
      const _line = (d3.line())(twoPoints);
      newLines.push(_line); 

      if (_lines.length == 1) break;
    }

    return newLines;
  }

  const appendHorizontalLine = (selection, y, max) => {
    selection.append("line")
             .style("stroke", "white")
             .style("stroke-dasharray", ("3, 3"))
             .style("stroke-width", 1)
             .style("opacity", 0.05)
             .attr("x1", 10)
             .attr("y1", y)
             .attr("x2", max)
             .attr("y2", y);
  }

  return (
    <svg ref={grid} id="grid" className="h-full w-10/12 min-h-[500px] min-w-[700px] grow">
      { 
        lines.map((line, i) => 
          <motion.path key={i} d={line} fill="none" strokeDasharray={1} stroke="rgba(255,255,255,0.4)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: ELEMENT_DRAW_DURATION, ease: circOut, delay: ELEMENT_DRAW_DELAY(i) }}
          />
        ) 
      }
      { 
        circles.map((circle, i) => 
          <motion.g
            key={circle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: ELEMENT_DRAW_DURATION, ease: circOut, delay: ELEMENT_DRAW_DELAY(i)  }}  
          >
            <circle key={circle} r="1.5" cx={circle[0]} cy={circle[1]} fill="white" stroke="white"/>
            <text fill="white" fontSize={"0.6rem"} dx={circle[0] + 5} dy={circle[1]} >{diskRequests[i]}</text>
          </motion.g> 
        ) 
      }
    </svg>
  );
}

export default Grid;