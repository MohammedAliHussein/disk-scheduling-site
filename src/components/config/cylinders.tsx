const Cylinders = ({ cylinders, setCylinders }) => {
  const verifyCylinders = userInput => {
    const regex = /^[0-9]*$/;

    return userInput.match(regex);
  };

  const handleCylinderChange = e => {
    const userInput = e.target.value;

    if (verifyCylinders(userInput)) {
      setCylinders(userInput);
    }
  };

  return (
    <div className="flex flex-col gap-3 w-9/12">
      <p className="text-white text-center font-bold">Cylinders</p>
      <div className="flex flex-wrap gap-2 justify-center">
        <input
          value={cylinders}
          onChange={handleCylinderChange}
          className="bg-transparent outline outline-1 outline-[rgba(255,255,255,0.1)] text-white text-center text-[0.8rem] p-1 w-full"
        />
      </div>
    </div>
  );
};

export default Cylinders;
