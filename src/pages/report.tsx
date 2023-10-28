const ReportPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-neutral-950 p-12">
      <p className="text-white text-4xl font-bold">Report an issue</p>
      <Divider />
      <div className="w-full grow flex flex-col">
        <div className="w-full flex justify-between">
          <p className="flex h-fit text-[rgb(255,255,255)] text-[0.8rem] outline outline-1 outline-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,1)] hover:text-[rgba(0,0,0,0.8)] transition out-circ py-[0.2rem] px-[0.4rem] cursor-pointer">
            Create a new issue
          </p>
          <div className="flex gap-3 items-center">
            <input
              placeholder="Search for an existing issue"
              className=" min-w-[20vw] bg-transparent outline outline-1 outline-[rgba(255,255,255,0.1)] text-white text-[0.8rem] px-3 py-1"
            />
            <p className="flex items-center h-fit text-[rgb(255,255,255)] text-[0.8rem] outline outline-1 outline-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,1)] hover:text-[rgba(0,0,0,0.8)] transition out-circ py-[0.2rem] px-[0.4rem] cursor-pointer">
              Search
            </p>
          </div>
        </div>
        <Divider />
      </div>
    </div>
  );
};

const Divider = () => {
  return (
    <div className="w-full my-4 border-t-[1px] border-white opacity-5"></div>
  );
};

export default ReportPage;
