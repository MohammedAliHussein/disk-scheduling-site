import { useState } from "react";

import Open from "./open";
import Title from "./title";
import Config from "./config";
import Result from "./result";
import Grid from "./grid";
import Disclaimer from "./disclaimer";
import { AnimatePresence } from "framer-motion";

const Seektime = () => {
  const [configOpen, setConfigOpen] = useState<Boolean>(false);
  const [seekTime, setSeekTime] = useState<Number>(0);

  return (
    <div className="min-h-screen w-full min-w-fit flex flex-col items-center justify-center px-56 py-10 gap-5 bg-neutral-950">
      <Disclaimer />
      <Title />
      <Open setConfigOpen={setConfigOpen} configOpen={configOpen}/>
      <Result seekTime={seekTime} />
      <Grid />
      <AnimatePresence>
        { configOpen && <Config setConfigOpen={setConfigOpen} configOpen={configOpen} /> }
      </AnimatePresence>
    </div>
  ) 
}

export default Seektime;