import Input from "./Input";
import BusSelectionFilters from "./BusSelectionFilters";
import CardData from "./CardData";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { AiOutlineSwap } from "react-icons/ai";
import { useSelector,useDispatch } from "react-redux";
import { setFromLoc,setToLoc } from "../redux/busSlice";
import CustomerInfo from "./CustomerInfo";
import TicketSuccessModal from "./TicketSuccessModal";

function NavTicketShow() {
  const [modify, setModify] = useState(false);
  const fromLoc = useSelector((state) => state.bus.fromLoc)
  const toLoc = useSelector((state) => state.bus.toLoc)

  const dispatch = useDispatch()

  const handleSwap = () => {
    dispatch(setToLoc(fromLoc))
    dispatch(setFromLoc(toLoc))
  };

  const setFrom = (e) => {
    dispatch(setFromLoc(e))
  }

  const setTo = (e) => {
    dispatch(setToLoc(e))
  }


  const currDate = "20 Nov";
  const curryear = "2023";

  function setPreviousDay() {
    console.log("changes day to previous day");
  }

  function setNextDay() {
    console.log("changes day to next day");
  }

  

  return (
    <>
    <TicketSuccessModal/>
    <CustomerInfo/>
      <div className=" relative z-10 p-5 bg-red-300 text-xl">
        <span className="font-semibold">{`Home >`}</span>
        <span>{` Trips >`}</span> <span>{` ${fromLoc} To ${toLoc} >`}</span>
      </div>
      <div className="py-2 px-5 bg-gray-50 border-b-2 border-gray-200 text-xl font-bold">{`${fromLoc} to ${toLoc} Trip`}</div>
      {modify ? (
        <div className=" z-10 p-1 bg-gray-50 border-b-2 border-gray-200 text-xl font-bold sticky top-0 flex">
          {/**navbar with input fields for modifications */}
          <div className="flex flex-wrap">
            <Input
              name="From"
              type="text"
              placeholder={fromLoc}
              onChangeFunc={setFrom}
            />
            <div className="mr-10 w-10 h-10 m-auto bg-gray-50 ">
              <button onClick={() => handleSwap()} className="w-full mx-auto">
                <AiOutlineSwap style={{ display: "inline" }} />
              </button>
            </div>
            <Input
              name="To"
              type="text"
              placeholder={toLoc}
              onChangeFunc={setTo}
            />
            <Input name="Date" type="date" value={currDate} />
            <button
              className=" mx-10 my-4 px-10 py-1 border border-gray-400 bg-red-600 hover:bg-red-500 rounded-sm text-white font-normal text-xl"
              onClick={() => setModify(!modify)}
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className=" z-10 p-5 bg-gray-50 border-b-2 border-gray-200 text-2xl font-bold sticky top-0 flex flex-wrap">
          {/**default navbar without any input fields for modifier */}
          <div className="my-auto">
            <span className="pr-5">{fromLoc}</span>
            <FaArrowRightLong style={{ display: "inline" }} />
            <span className="p-5">{toLoc}</span>
          </div>
          <div className="flex  flex-wrap px-10 text-lg">
            <div
              className="my-auto px-2 cursor-pointer"
              onClick={() => setPreviousDay()}
            >
              <MdArrowBackIos style={{ display: "inline" }} />
            </div>
            <div className="grid grid-cols-1 px-2">
              <div className="">{currDate}</div>
              <div className="mx-auto">{curryear}</div>
            </div>
            <div
              className="my-auto px-2 cursor-pointer"
              onClick={() => setNextDay()}
            >
              <MdArrowForwardIos style={{ display: "inline" }} />
            </div>
          </div>
          <button
            className="px-10 py-1 border border-gray-400 bg-red-600 hover:bg-red-500 rounded-sm text-white font-normal text-xl"
            onClick={() => setModify(!modify)}
          >
            Modify
          </button>
       
        </div>
      )}
         <div className="grid grid-cols-11">

        <div className="col-span-11 sm:col-span-2 order-2 sm:order-1">
         <BusSelectionFilters/>
         </div>
         <div className="col-span-11 sm:col-span-9 order-1 sm:order-2">
         <CardData/>
      </div>
      </div>
    </>
  );
}


export default NavTicketShow;
