import { BsXLg } from "react-icons/bs";

const Close = ({ handleClick }) => {
  return (
    <div onClick={handleClick} className="absolute w-fit h-fit top-0 right-0 p-2 cursor-pointer">
      <BsXLg className="text-white"/>
    </div>
  );
}

export default Close;