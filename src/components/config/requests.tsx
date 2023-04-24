import { useState } from "react";

const Requests = () => {
  const [diskRequests, setDiskRequests] = useState("53,98,183,37,122,14,124,65,67");

  const verifyUserDiskRequests = (userInput) => {
    const regex = /^[\,0-9]*$/;
    return userInput.match(regex);
  }

  const handleDiskRequestChange = (e) => {
    const userInput = e.target.value;

    if (verifyUserDiskRequests(userInput)) {
      setDiskRequests(userInput);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-white text-center font-bold">Disk Requests</p>
      <div className="flex flex-wrap gap-2 justify-center">
        <input value={diskRequests} onChange={handleDiskRequestChange} className="bg-transparent outline outline-1 outline-[rgba(255,255,255,0.1)] text-white text-center text-[0.8rem] p-1 w-full"/>
      </div>
    </div>
  );
}

export default Requests;