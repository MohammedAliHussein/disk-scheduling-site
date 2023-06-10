const Open = ({ setConfigOpen, configOpen }) => {
  const handleClick = () => {
    setConfigOpen(!configOpen);
  };

  return (
    <p
      onClick={handleClick}
      className="
        text-[rgb(255,255,255)] 
        text-[0.7rem] 
        outline 
        outline-1 
        outline-[rgba(255,255,255,0.25)] 
        hover:bg-[rgba(255,255,255,1)]
        hover:text-[rgba(0,0,0,0.8)]
        transition
        out-circ
        py-[0.2rem]
        px-[0.4rem]
        cursor-pointer"
    >
      Configure Scheduler
    </p>
  );
};

export default Open;
