import { RiBusWifiFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { SlPeople } from "react-icons/sl";
import { useState } from "react";
import { DateTime } from "luxon"
import { useSelector} from "react-redux";


function BusTripCard({ itenary }) {
    const fromLoc = useSelector((state) => state.bus.fromLoc)
    const toLoc = useSelector((state) => state.bus.toLoc)
    
 
const startTime =parseInt(itenary.startTime)
const EndTime =parseInt(itenary.EndTime)
    const dateTime1 = DateTime.fromSeconds(startTime);
    const dateTime2 = DateTime.fromSeconds(EndTime);
    const duration = dateTime2.diff(dateTime1);
    console.log(duration)
    return (
        <div className="relative my-2 px-3 pt-2 border border-solid border-gray-00 grid grid-cols-2 md:grid-cols-7">
            <div className="col-span-2 p-5 text-md xl:text-xl font-semibold order-1 border-b border-solid border-gray-300 sm:border-transparent">
                <div className="my-2 ">
                    {itenary.busName}
                </div>
                <div className="my-2 text-gray-500 text-[15px]">
                    {itenary.category}
                </div>
                <div className="my-2 px-2 w-fit border border-solid border-sky-100 text-[13px] flex items-center gap-1">
                    <RiBusWifiFill />{itenary.animeties_list[0]}
                </div>
            </div>
            <div className="col-span-1 flex flex-col order-2 border-r border-solid border-gray-300 sm:border-transparent">
                <strong className="my-2">{DateTime.fromMillis(itenary.date).toFormat("hh:mm a")}</strong>
                <p className="my-3 px-2 py-1 w-fit bg-sky-500 text-white rounded-md">Next</p>
                <p>{fromLoc}</p>
            </div>
            <div className="col-span-1 order-4 sm:order-3">
                {duration.days > 1 ?
                    <>
                        <span className="font-bold">{duration.days}</span>d <span className="font-bold">{duration.hours}</span>h <span className="font-bold">{duration.minutes}</span>m
                    </>
                    :
                    <>
                        <span className="font-bold">{duration.hours}</span>h <span className="font-bold">{duration.minutes}</span>m
                    </>
                }
            </div>
            <div className="mx-3 sm:mx-0 col-span-1 flex flex-col order-3 sm:order-4">
                <span className="font-bold my-2">

                {DateTime.fromMillis(EndTime).toFormat("hh:mm a")}
                </span>
                <span className="my-2">
                    {DateTime.fromMillis(EndTime).toFormat("dd LLL")}
                </span>
                <span className="my-2">
                    {toLoc}
                </span>
            </div>
            <div className="col-span-1 order-5">
                <div className="bg-[#38b87c] flex justify-center w-fit px-2 py-[2px] my-3 rounded-sm">

                <FaStar style={{background:"#38b87c", fill:"white"}} />
                </div>
                <div className="flex items-center gap-2">
                    <SlPeople/>
                    382
                </div>
            </div>
            <div className="col-span-1 order-6">
                <div className="flex items-center">
                <span className="mx-1 text-sm">INR</span>
                <strong className="mx-1 text-xl">{itenary.busFare}</strong>
                </div>
            </div>
            <button className="absolute bottom-0 right-0 px-5 py-2 bg-red-500/90 hover:bg-red-500/70 text-white" onClick={()=>{}}>
                Buy Tickets
            </button>
        </div>
        
    );
}

export default BusTripCard;