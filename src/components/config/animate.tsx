const Animate = ({ animate, setAnimate }) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-white text-center font-bold">Animate</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {animate === true ? (
          <>
            <p className="text-[0.7rem] outline outline-1 outline-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,1)] text-[rgba(0,0,0,0.8)] transition out-circ py-[0.2rem] px-[0.4rem] cursor-pointer w-[2rem] text-center">
              ON
            </p>
            <p
              onClick={() => {
                setAnimate(false);
              }}
              className=" text-[rgba(255,255,255,0.25)] text-[0.7rem] outline outline-1 outline-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,1)] hover:text-[rgba(0,0,0,0.8)] transition out-circ py-[0.2rem] px-[0.4rem] cursor-pointer w-[2rem] text-center"
            >
              OFF
            </p>
          </>
        ) : (
          <>
            <p
              onClick={() => {
                setAnimate(true);
              }}
              className=" text-[rgba(255,255,255,0.25)] text-[0.7rem] outline outline-1 outline-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,1)] hover:text-[rgba(0,0,0,0.8)] transition out-circ py-[0.2rem] px-[0.4rem] cursor-pointer w-[2rem] text-center"
            >
              ON
            </p>
            <p className="text-[0.7rem] outline outline-1 outline-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,1)] text-[rgba(0,0,0,0.8)] transition out-circ py-[0.2rem] px-[0.4rem] cursor-pointer w-[2rem] text-center">
              OFF
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Animate;
