const Direction = ({ direction, setDirection, algorithm }) => {
  const headDirections = ["LEFT", "RIGHT"];

  const directionSelectable = () => {
    if (algorithm === "SCAN" || algorithm === "LOOK") {
      return true;
    }

    return false;
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-white text-center font-bold">Head Direction</p>
      <div className="flex flex-wrap gap-2 justify-center">
        { headDirections.map(headDirection => {
          if (headDirection === direction) {
            return (
              <span key={headDirection} title={directionSelectable() ? "" : `${headDirection} not applicable.`}>
                <p key={headDirection} style={{ pointerEvents: directionSelectable() ? "all" : "none" }} className="text-[0.7rem] outline outline-1 outline-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,1)] text-[rgba(0,0,0,0.8)] transition out-circ py-[0.2rem] px-[0.4rem] cursor-pointer w-fit">{headDirection}</p>
              </span> 
            )
          } else {
            if (!directionSelectable()) setDirection(null);
            return (
              <span key={headDirection} title={directionSelectable() ? "" : `${headDirection} not applicable.`} onClick={() => { setDirection(headDirection); }}>
                <p key={headDirection} style={{ pointerEvents: directionSelectable() ? "all" : "none" }} className=" text-[rgba(255,255,255,0.25)] text-[0.7rem] outline outline-1 outline-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,1)] hover:text-[rgba(0,0,0,0.8)] transition out-circ py-[0.2rem] px-[0.4rem] cursor-pointer w-fit">{headDirection}</p>
              </span> 
            )
          }})
        }
      </div>
    </div>
  );
}

export default Direction;