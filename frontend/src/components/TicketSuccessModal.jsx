import { DateTime } from "luxon";
import { useDispatch, useSelector } from "react-redux";
import { setTicketModal } from "../redux/busSlice";

function TicketSuccessModal() {
    const ticketSuccess = useSelector(state => state.bus.ticketModal)
    const currentItenary = useSelector(state => state.trips.currentTrip)
    const totalSeats = useSelector(state => state.trips.totalSeatsBooked)
    const customerInfo = useSelector(state => state.customerInfo.customerInfo)
    const fromLoc = useSelector((state) => state.bus.fromLoc)
    const toLoc = useSelector((state) => state.bus.toLoc)
    const date = new Date(useSelector((state) => state.bus.date))
    const currDate = `${date.getDate()} ${date.toLocaleString('en-US', { month: 'short' })}`
    const curryear = date.getYear() > 100 ? date.getYear() - 100 : date.getYear()
    const dateTime1 = DateTime.fromSeconds(currentItenary?.startTime || 0);
    const dateTime2 = DateTime.fromSeconds(currentItenary?.EndTime || 0);
    const duration = dateTime2.diff(dateTime1);
    const seatsSelected = useSelector(store => store.trips.seatNames)

    const dispatch = useDispatch()
    function handleClose() {
        dispatch(setTicketModal(false))
    }

    return (
        <div className={`z-[200] ${ticketSuccess ? "fixed top-0 left-0" : "hidden"} h-full w-full bg-gray-500/40 flex justify-center items-center`}>
            <div className="relative">
                <div className="absolute top-5 right-5 cursor-pointer text-white" onClick={() => handleClose()}>
                    <div className="h-7 w-7 text-center border border-solid border-white rounded-full">
                        x
                    </div>
                </div>
                <div className=" h-fit w-fit bg-white rounded-xl flex-col overflow-hidden">
                    <div className="p-5 border-b border-dashed border-gray-500 bg-sky-600">
                        <p className="text-xl font-semibold text-center text-white">Ticket Booking</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 min-w-[20vw]">
                        <div className="px-5 py-2 border-r border-solid border-gray-400">
                            <p className="mb-5 text-lg font-semibold text-gray-500 text-center border-y border-dashed border-gray-500">Personal Details</p>
                            <div className="">
                                <div>
                                    <span className="text-sm">Name : </span><span className="text-lg font-semibold">{customerInfo?.name}</span>
                                </div>
                                <div>
                                    <span className="text-sm">Gender : </span> <span className="text-lg font-semibold">{customerInfo?.gender}</span>
                                </div>
                                <div>
                                    <span className="text-sm">Phone No : </span> <span className="text-lg font-semibold">{customerInfo?.phoneNo}</span>
                                </div>
                                <div>
                                    <span className="text-sm">address : </span> <span className="text-lg font-semibold">{customerInfo?.address}</span>
                                </div>
                                <div>
                                    <span className="text-sm">Booking Time : </span> <span className="text-lg font-semibold">{DateTime.fromMillis(customerInfo?.timeOfBooking).toFormat("dd LLL hh:mm a")}</span>
                                </div>
                                <div>
                                    <span className="text-sm">Transaction ID : </span> <span className="text-lg font-semibold">{customerInfo?.transactionId}</span>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 py-2 min-w-[20vw]">
                            <p className="mb-5 text-lg font-semibold  text-gray-500 text-center border-y border-dashed border-gray-500">Trip Details</p>
                            <div className="">
                                <div>
                                    <span className="text-sm">From : </span> <span className="text-lg font-semibold">{fromLoc}</span>
                                </div>
                                <div>
                                    <span className="text-sm">Destination : </span> <span className="text-lg font-semibold">{toLoc}</span>
                                </div>
                                <div>
                                    <span className="text-sm">Date : </span> <span className="text-lg font-semibold">{`${currDate} ${curryear}`}</span>
                                </div>
                                <div>
                                    <span className="text-sm">Duration : </span> <span className="text-lg font-semibold">{`${duration.days} Days ${duration.hours} hrs ${duration.minutes} mins`}</span>
                                </div>
                                <div>
                                    <span className="text-sm">Seats Booked : </span> <span className="text-lg font-semibold">{seatsSelected.join(", ")}</span>
                                </div>
                                <div>
                                    <span className="text-sm">Total Fare : </span> <span className="text-lg font-semibold">₹ {currentItenary?.busFare * seatsSelected.length}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 border-t border-dashed border-gray-500 italic text-center">
                        <p>We wish you have a <em className="font-semibold px-1">Wonderful</em> and <em className="font-semibold px-1">Safe</em> trip!</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketSuccessModal