export const BOUNDARY_MARGIN = 20;
export const ELEMENT_DRAW_DURATION = 0.5;
export const ELEMENT_DRAW_DELAY = (i: Number) =>
  ELEMENT_DRAW_DURATION * i + 0.2;

export const clearData = svg => {
  svg.select('.axis').remove();
};

export const appendAxis = (axis, svg, d3) => {
  svg
    .append('g')
    .attr('class', 'axis')
    .style('color', 'white')
    .style('opacity', '0.8')
    .call(d3.axisBottom(axis));
};

export const createGuides = (end, diskRequests, cylinders, ref) => {
  const guides = [];

  for (let i = 0; i < diskRequests.length; i++) {
    const x = end * (diskRequests[i] / cylinders);
    const y = ((ref.current.clientHeight - 30) / diskRequests.length) * i + 30;
    const guide = [
      [BOUNDARY_MARGIN, y],
      [end, y],
    ];
    guides.push(guide);
  }

  return guides;
};

export const createPoints = (end, diskRequests, cylinders, ref) => {
  const points = [];

  for (let i = 0; i < diskRequests.length; i++) {
    let x = end * (diskRequests[i] / cylinders);
    const y = ((ref.current.clientHeight - 30) / diskRequests.length) * i + 30;

    if (x < BOUNDARY_MARGIN) x = BOUNDARY_MARGIN;

    points.push([x, y]);
  }

  return points;
};

export const createLines = (end, diskRequests, cylinders, ref, d3) => {
  const lines = [];
  const individuals = [];

  for (let i = 0; i < diskRequests.length; i++) {
    let x = end * (diskRequests[i] / cylinders);
    const y = ((ref.current.clientHeight - 30) / diskRequests.length) * i + 30;

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
