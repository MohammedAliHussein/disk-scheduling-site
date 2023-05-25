import { useState } from "react";

const Requests = ({ diskRequests, setDiskRequests }) => {
  const [displayedInput, setDisplayedInput] = useState(diskRequests);

  const verifyUserDiskRequests = (userInput) => {
    const regex = /^[\,0-9]*$/;
    return userInput.match(regex);
  }

  const handleDiskRequestChange = (e) => {
    const userInput = e.target.value;

    if (verifyUserDiskRequests(userInput)) {
      setDisplayedInput(userInput);

      const cleaned = userInput.split(",").filter(element => element.length > 0)
      const transformed = cleaned.map(element => parseInt(element));

      setDiskRequests(transformed);
    }
  }

  return (
    <div className="flex flex-col gap-3 w-9/12">
      <p className="text-white text-center font-bold">Disk Requests</p>
      <div className="flex flex-wrap gap-2 justify-center">
        <input value={displayedInput} onChange={handleDiskRequestChange} className="bg-transparent outline outline-1 outline-[rgba(255,255,255,0.1)] text-white text-center text-[0.8rem] p-1 w-full"/>
      </div>
    </div>
  );
}

export default Requests;