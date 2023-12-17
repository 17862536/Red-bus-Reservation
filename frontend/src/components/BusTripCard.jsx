import { RiBusWifiFill } from "react-icons/ri";
import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import { SlPeople } from "react-icons/sl";
import { DateTime } from "luxon"
import { useSelector, useDispatch } from "react-redux";
import { setCardIndex, setModal } from "../redux/busSlice";
import { setCurrentTrip, setSeatNames, setTotalSeatsBooked } from "../redux/tripSlice";
import { useRef, useState } from "react";
import { PiSteeringWheelBold } from "react-icons/pi";


function BusTripCard({ itenary , index }) {
  const fromLoc = useSelector((state) => state.bus.fromLoc);
  const toLoc = useSelector((state) => state.bus.toLoc);

  const [showSeatSelection, setShowSeatSelection] = useState(false)
    const seatSelection = useSelector((state) => state.bus.cardIndex)
    const bookedSeats = itenary.SeatBooked
    const [selectedSeats, setSelectedSeats] = useState([])
    const dateTime1 = DateTime.fromSeconds( parseInt(itenary.startTime));
    
    console.log(typeof(itenary.startTime))
    const dateTime2 = DateTime.fromSeconds(parseInt(itenary.EndTime));
console.log(typeof(itenary.startTime))
    const duration = dateTime2.diff(dateTime1);
    const dispatch = useDispatch()
    const triggerModal = () => {
        dispatch(setModal(true))
        dispatch(setCurrentTrip(itenary))
        dispatch(setTotalSeatsBooked(selectedSeats.length))
        dispatch(setSeatNames(selectedSeats))
        setSelectedSeats([])
    }

    const buttonRef = useRef(null)

    const handleSeatSelection = () => {
        console.log(seatSelection, index)
        dispatch(setCardIndex(index))
        setShowSeatSelection(!showSeatSelection)
        setTimeout(() => {
            buttonRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }, 0);
    }

    const handleSeatBooking = (seat) => {
        if (!selectedSeats.includes(seat) && !bookedSeats.includes(seat) && selectedSeats.length < 4) {
            setSelectedSeats([...selectedSeats, seat])
        } else {
            setSelectedSeats(selectedSeats.filter((s) => s !== seat))
        }
    }
    //Dummy seats
    const seatsSeater = ["E-01", "E-02", "E-03", "E-04", "E-05", "E-06", "E-07", "E-08", "E-09", "E-10", "E-11", "E-12", "E-13", "E-14", "E-15", "E-16", "E-17", "E-18", "E-19", "E-20"]
    const seatSleeper = ["S-01", "S-02", "S-03", "S-04", "S-05", "S-06", "S-07", "S-08", "S-09", "S-10", "S-11", "S-12", "S-13", "S-14", "S-15", "S-16"]
    const seatSleeperUpper = ["U-01", "U-02", "U-03", "U-04", "U-05", "U-06", "U-07", "U-08", "U-09", "U-10", "U-11", "U-12", "U-13", "U-14", "U-15", "U-16"]


    return (
        <div>
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
                    <strong className="my-2">{DateTime.fromMillis(parseInt(itenary.date)).toFormat("hh:mm a")}</strong>
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

                        {DateTime.fromMillis(parseInt(itenary.EndTime)).toFormat("hh:mm a")}
                    </span>
                    <span className="my-2">
                        {DateTime.fromMillis(parseInt(itenary.EndTime)).toFormat("dd LLL")}
                    </span>
                    <span className="my-2">
                        {toLoc}
                    </span>
                </div>
                <div className="col-span-1 order-5">
                    <div className="bg-[#38b87c] flex justify-center w-fit px-2 py-[2px] my-3 rounded-sm">

                        <FaStar style={{ background: "#38b87c", fill: "white" }} />
                    </div>
                    <div className="flex items-center gap-2">
                        <SlPeople />
                        382
                    </div>
                </div>
                <div className="col-span-1 order-6">
                    <div className="flex items-center">
                        <span className="mx-1 text-sm">INR</span>
                        <strong className="mx-1 text-xl">{itenary.busFare}</strong>
                    </div>
                </div>
                <button className="absolute bottom-0 right-0 px-5 py-2 bg-red-500/90 hover:bg-red-500/70 text-white" onClick={() => handleSeatSelection()}>{/*triggerModal()*/}
                    {seatSelection === index && showSeatSelection ? "Hide Seats" : "Show Seats"}
                </button>
            </div>
            <div className={`relative inset-0 w-full bg-gray-200 border border-solid border-gray-200 transition-all duration-900 ${showSeatSelection ? 'translate-y-1 opacity-100' : 'translate-y-0 opacity-0'}`}>
                {
                    seatSelection === index && showSeatSelection &&
                    <div className="relative w-full bg-gray-200 border border-solid border-gray-200">
                        <div className="min-h-[50vh]">
                            <div className="p-5 flex flex-wrap">
                                <div className="w-[100%] lg:w-[55%] min-h-[50vh] grid grid-cols-1 items-center">
                                    <div className="relative h-[60vh] md:h-fit">
                                        <p className="hidden lg:block mx-40 px-10 ">Lower Deck</p>
                                        <div className="absolute left-[200px] sm:left-0 sm:relative w-[430px] sm:w-fit mx-auto p-5  border-y border-r border-l-8 border-solid border-gray-400 bg-white origin-top-left rotate-90 sm:rotate-0">
                                            <div className="absolute top-9 left-2">
                                                <PiSteeringWheelBold style={{ height: "25px", width: "25px", color: "#707070" }} />
                                            </div>
                                            <div className="my-5 px-5 w-fit grid grid-cols-8 gap-3 md:gap-1">
                                                {seatSleeper.map((seat, index) => (
                                                    <div key={index} className="items-center gap-2">
                                                        <div className={`${selectedSeats.includes(seat) ? "bg-sky-500 border-white" : "bg-gray-200 border-gray-400"} ${bookedSeats.includes(seat) || (selectedSeats.length >= 4 && !selectedSeats.includes(seat)) ? "bg-gray-400 cursor-not-allowed" : "cursor-pointer"} w-10 h-5  border border-solid rounded-sm flex justify-end items-center`} onClick={() => handleSeatBooking(seat)}>
                                                            <div className={`h-4 w-2 border-l border-solid ${selectedSeats.includes(seat) ? "border-white" : "border-gray-400"} rounded-md`}></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="my-5 px-5 w-fit grid grid-cols-10 gap-4">
                                                {seatsSeater.map((seat, index) => (
                                                    <div key={index} className="items-center gap-2">
                                                        <div className={`${selectedSeats.includes(seat) ? "bg-sky-500 border-white" : "bg-gray-200 border-gray-400"} ${bookedSeats.includes(seat) || (selectedSeats.length >= 4 && !selectedSeats.includes(seat)) ? "bg-gray-400 cursor-not-allowed" : "cursor-pointer"} w-5 h-5  border border-solid rounded-sm flex justify-end items-center`} onClick={() => handleSeatBooking(seat)}>
                                                            <div className={`h-4 w-2 border-l border-solid ${selectedSeats.includes(seat) ? "border-white" : "border-gray-400"} rounded-md`}></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative h-[50vh] md:h-fit">
                                        <p className="hidden lg:block mx-40 px-10 ">Upper Deck</p>
                                        <div className=" absolute right-[-50px] sm:right-0 top-[120px] sm:top-0 sm:relative w-[400px] sm:w-fit mx-auto p-5  border-y border-r border-l-8 border-solid border-gray-400 bg-white rotate-90 sm:rotate-0">
                                            <div className="my-5 w-fit grid grid-cols-8 gap-3 md:gap-3">
                                                {seatSleeperUpper.map((seat, index) => (
                                                    <div key={index} className="items-center gap-2">
                                                        <div className={`${selectedSeats.includes(seat) ? "bg-sky-500 border-white" : "bg-gray-200 border-gray-400"} ${bookedSeats.includes(seat) || (selectedSeats.length >= 4 && !selectedSeats.includes(seat)) ? "bg-gray-400 cursor-not-allowed" : "cursor-pointer"} w-10 h-5  border border-solid rounded-sm flex justify-end items-center`} onClick={() => handleSeatBooking(seat)}>
                                                            <div className={`h-4 w-2 border-l border-solid ${selectedSeats.includes(seat) ? "border-white" : "border-gray-400"} rounded-md`}></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[100%] lg:w-[45%] min-h-[50vh] lg:p-5">
                                    {selectedSeats[0] === undefined ?
                                        <>
                                            <p className="text-lg font-semibold">Seat Legend</p>
                                            <div className="grid grid-cols-2">
                                                <div className="flex gap-2">
                                                    <div className="bg-white border border-solid border-gray-400 w-10 h-5"></div> <p className="font-semibold">Available</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <div className="bg-gray-400 border border-solid border-gray-400 w-10 h-5"></div> <p className="font-semibold">Booked</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <div className="bg-sky-500 border border-solid border-gray-400 w-10 h-5"></div> <p className="font-semibold">Currently Selected</p>
                                                </div>
                                            </div>
                                        </> :
                                        <>
                                            <div className="md:p-5">
                                                <div className="pb-10">
                                                    <h2 className="font-bold text-lg">Booking Details</h2>
                                                    <small className="text-gray-500 text-sm">You have selected {selectedSeats.length} seat(s)</small>
                                                </div>
                                                <div className="bg-white h-full">
                                                    <div className="text-center border-b border-solid border-gray-300">
                                                        <h2 className="font-semibold text-lg py-2">Confirmation</h2>
                                                        <small className="text-gray-500 textsm">The booking is non refundable on the day of trip</small>
                                                    </div>
                                                    <div className="p-5 grid grid-cols-1 justify-center">
                                                        <div className="grid grid-cols-1 text-center">
                                                            <div className="mb-2">
                                                                <span className="p-1 md:p-5 text-sm md:text-2xl font-bold">{fromLoc}</span>
                                                                <FaArrowRightLong style={{ display: "inline" }} />
                                                                <span className="p-1 md:p-5 text-sm md:text-2xl font-bold">{toLoc}</span>
                                                            </div>
                                                            <div className="mb-2 text-center">
                                                                <span className="px-5 text-sm sm:text-md">{DateTime.fromMillis(itenary.startTime).toFormat("hh:mm a")}</span>
                                                                <FaArrowRightLong style={{ display: "inline" }} />
                                                                <span className="px-5 text-sm sm:text-md">{DateTime.fromMillis(itenary.EndTime).toFormat("hh:mm a")}</span>
                                                            </div>
                                                            <div className="flex gap-4 justify-center">
                                                                <p className="font-md">Bus Name :</p>
                                                                <p className="font-semibold">{itenary.busName}</p>
                                                            </div>
                                                            <div className="flex gap-4 justify-center">
                                                                <p className="font-md">Category :</p>
                                                                <p className="font-semibold">{itenary.category}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="px-5 py-3 w-full border-t border-solid border-gray-300">
                                                        <em className="px-3 font-semibold text-md">Total:</em>
                                                        <em className="px-3 font-bold text-lg">₹ {itenary.busFare * selectedSeats.length}</em>
                                                        <em className="px-2 text-xs text-gray-500">(inclusive of all taxes)</em>
                                                    </div>
                                                    <div>
                                                        <button ref={buttonRef} className="w-full px-5 py-2 bg-red-500/90 hover:bg-red-500/70 text-white" onClick={() => triggerModal()}>
                                                            Buy Ticket
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default BusTripCard;
