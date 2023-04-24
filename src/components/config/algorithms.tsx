const Algorithms = () => {
  const algorithms = ["FCFS", "SSTF", "SCAN", "C-SCAN", "LOOK", "C-LOOK"];

  return (
    <div className="flex flex-col gap-3">
      <p className="text-white text-center font-bold">Algorithms</p>
      <div className="flex flex-wrap gap-2 justify-center">
        { algorithms.map(algorithm => <p key={algorithm} className=" text-[rgba(255,255,255,0.25)] text-[0.7rem] outline outline-1 outline-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,1)] hover:text-[rgba(0,0,0,0.8)] transition out-circ py-[0.2rem] px-[0.4rem] cursor-pointer w-fit">{algorithm}</p>) }
      </div>
    </div>
  );
}

export default Algorithms;