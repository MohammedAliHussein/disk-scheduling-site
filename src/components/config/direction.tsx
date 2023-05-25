import { useEffect } from "react";

const Direction = ({ direction, setDirection, algorithm }) => {
  const headDirections = ["LEFT", "RIGHT"];

  const directionSelectable = (algorithm) => {
    if (algorithm === "SCAN" || algorithm === "LOOK") {
      return true;
    }

    return false;
  }

  useEffect(() => {
    if (!directionSelectable(algorithm)) {
      setDirection(null);
    }
  }, [algorithm]);

  return (
    <div className="flex flex-col gap-3">
      <p className="text-white text-center font-extrabold">Head Direction</p>
      <div className="flex flex-wrap gap-2 justify-center">
        { headDirections.map(headDirection => {
          if (headDirection === direction) {
            return (
              <span key={headDirection} title={directionSelectable(algorithm) ? "" : `${headDirection} not applicable.`}>
                <p key={headDirection} style={{ pointerEvents: directionSelectable(algorithm) ? "all" : "none" }} className="text-[0.7rem] outline outline-1 outline-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,1)] text-[rgba(0,0,0,0.8)] transition out-circ py-[0.2rem] px-[0.4rem] cursor-pointer w-fit">{headDirection}</p>
              </span> 
            )
          } else {
            return (
              <span key={headDirection} title={directionSelectable(algorithm) ? "" : `${headDirection} not applicable.`} onClick={() => { if (directionSelectable(algorithm)) setDirection(headDirection); }}>
                <p key={headDirection} style={{ pointerEvents: directionSelectable(algorithm) ? "all" : "none" }} className=" text-[rgba(255,255,255,0.25)] text-[0.7rem] outline outline-1 outline-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,1)] hover:text-[rgba(0,0,0,0.8)] transition out-circ py-[0.2rem] px-[0.4rem] cursor-pointer w-fit">{headDirection}</p>
              </span> 
            )
          }})
        }
      </div>
    </div>
  );
}

export default Direction;