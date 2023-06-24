const Guides = ({ guides }) => {
  return (
    <>
      {guides.map(guide => (
        <line
          key={guide[0][1]}
          stroke="white"
          strokeDasharray={'3px, 3px'}
          strokeWidth={'1px'}
          opacity={'0.1'}
          x1={guide[0][0]}
          y1={guide[0][1]}
          x2={guide[1][0]}
          y2={guide[1][1]}
        />
      ))}
    </>
  );
};

export default Guides;
