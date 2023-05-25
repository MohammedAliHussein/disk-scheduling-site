const Algorithms = ({ algorithm, setAlgorithm }) => {
  const algorithms = ["FCFS", "SSTF", "SCAN", "C-SCAN", "LOOK", "C-LOOK"];

  const handleClick = (e) => {
    setAlgorithm(e.target.innerText);
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-white text-center font-extrabold">Algorithms</p>
      <div className="flex flex-wrap gap-2 justify-center">
        { algorithms.map(currentAlgorithm => { 
            if (algorithm === currentAlgorithm) {
              return <p key={currentAlgorithm} className="text-xs outline outline-1 outline-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,1)] text-[rgba(0,0,0,0.8)] transition out-circ px-[0.4rem] py-[0.2rem] cursor-pointer">{currentAlgorithm}</p> 
            } else {
              return <p onClick={handleClick} key={currentAlgorithm} className="text-[rgba(255,255,255,0.25)] text-xs outline outline-1 outline-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,1)] hover:text-[rgba(0,0,0,0.8)] transition out-circ px-[0.4rem] py-[0.2rem] cursor-pointer">{currentAlgorithm}</p>  
            }
          }) 
        }
      </div>
    </div>
  );
}

export default Algorithms;