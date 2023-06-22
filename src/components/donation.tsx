import { useState } from 'react';
import Terms from './donation/terms.of.service';
import { AnimatePresence } from 'framer-motion';

const Donation = () => {
  const [showingTerms, setShowingTerms] = useState<boolean>(false);

  const handleClick = () => {
    setShowingTerms(!showingTerms);
  };

  return (
    <>
      <AnimatePresence>
        {showingTerms && <Terms handleClick={handleClick} />}
      </AnimatePresence>
      <p
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
        onClick={handleClick}
      >
        Support seektime.app
      </p>
    </>
  );
};

export default Donation;
