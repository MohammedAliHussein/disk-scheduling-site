import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Open from "./open";
import Title from "./title";
import Config from "./config";
import Result from "./result";
import Grid from "./grid";
import Disclaimer from "./disclaimer";
import { DiskScheduler } from "@/lib/scheduler";

const Seektime = () => {
  const scheduler = new DiskScheduler();

  const [configOpen, setConfigOpen] = useState<Boolean>(false);

  const [algorithm, setAlgorithm] = useState("FCFS");
  const [direction, setDirection] = useState(null);
  const [cylinders, setCylinders] = useState<Number>(200);
  const [diskRequests, setDiskRequests] = useState<Number[]>([53, 98, 183, 37, 122, 14, 124, 65, 67]);
  const [seekTime, setSeekTime] = useState<Number>(640);

  useEffect(() => {
    //make sure we got each input
    //calculate seektime
  }, [algorithm, direction, cylinders, diskRequests]);

  return (
    <div className="min-h-screen w-full min-w-fit flex flex-col items-center justify-center px-56 py-10 gap-5 bg-neutral-950">
      <Disclaimer />
      <Title />
      <Open 
        setConfigOpen={setConfigOpen} 
        configOpen={configOpen} 
      />
      <Result seekTime={seekTime} />
      <Grid diskRequests={diskRequests} cylinders={cylinders} />
      <AnimatePresence>
        { 
          configOpen 
          && 
          <Config 
            setConfigOpen={setConfigOpen} 
            configOpen={configOpen} 
            algorithm={algorithm}
            setAlgorithm={setAlgorithm} 
            direction={direction}
            setDirection={setDirection} 
            setCylinders={setCylinders} 
            setDiskRequests={setDiskRequests} 
          /> 
        }
      </AnimatePresence>
    </div>
  ) 
}

export default Seektime;