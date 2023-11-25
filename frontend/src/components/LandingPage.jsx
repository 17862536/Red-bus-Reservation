import { useState } from "react";
import buslogo from "../assets/To.jpg"
import calender from '../assets/from.jpg'
import swap from '../assets/Swap.jpg'
import Input from "./Input";
import Hero from '../assets/HeroImage.png'
function LandingPage() {
  const [fromLoc, setFromLoc] = useState("Bengaluru");
  const [toLoc, setToLoc] = useState("Hyderabad");

  const handleSwap = () => {
    setFromLoc(toLoc);
    setToLoc(fromLoc);
  };
  return (
    <div className=" z-10 min-h-[89vh]  grid justify-center  ">
        <img src={Hero} alt="hero" className=' z-10 w-full fixed top-[10vh]  ' />
      <div className=" z-20 p-1 ">
        <h2 className="py-10 text-4xl font-semibold text-center text-white">
          India's most simple trip search application!
        </h2>
        <div className="min-h-[11vh] bg-white rounded-[40px] overflow-hidden flex flex-wrap">
          <Input
            name={"From"}
            type={"text"}
            img={buslogo}
            placeholder={fromLoc}
            onChangeFunc={setFromLoc}
          />

          <div className="w-10 h-10 m-auto bg-gray-50 border-2 border-gray-400 rounded-full overflow-hidden">
            <button onClick={() => handleSwap()} className="w-full mx-auto">
              <img
                src={swap}
                alt="Swap From and To locations"
                className="w-full mx-auto"
              />
            </button>
          </div>
          <Input
            name={"To"}
            type={"text"}
            img={buslogo}
            placeholder={toLoc}
            onChangeFunc={setToLoc}
          />

          <Input name={"Date"} type={"date"} img={calender} />
          <div className="w-full lg:w-auto">
            <div className="h-full w-full p-10 bg-[#d84e55] hover:bg-red-400 text-white flex justify-center">
              <p className="my-auto text-3xl font-bold">Search Trips</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;