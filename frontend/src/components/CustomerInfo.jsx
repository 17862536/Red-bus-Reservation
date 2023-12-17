import { useSelector } from "react-redux";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setModal } from "../redux/busSlice";
import { setCustomerInfo } from "../redux/customerInfoSlice";
import Payments from "./Payments";

function CustomerInfo() {
    const modal = useSelector((state) => state.bus.modal)
    const itenary = useSelector((state) => state.trips.currentTrip)

    const [termsAccepted, setTermsAccepted] = useState(false)
    const [paymentView, setPaymentView] = useState(false)
    const customerInfo = { tripId: itenary?._id, seatNo: `E-${Math.floor(Math.random() * 100) + 40}` }

    const [name, setName] = useState(undefined)
    const [gender, setGender] = useState(undefined)
    const [age, setAge] = useState(undefined)
    const [email, setEmail] = useState(undefined)
    const [phone, setPhone] = useState(undefined)
    const [cityOfResidence, setCityOfResidence] = useState(undefined)
    const [countryOfResidence, setCountryOfResidence] = useState(undefined)


    const dispatch = useDispatch()

    const currency = "₹"
    const totalSeats = useSelector(state => state.trips.totalSeatsBooked) || 1
    const price = itenary?.busFare * totalSeats

    function paymentHandler() {
        setPaymentView(true)
        customerInfo.name = name
        customerInfo.gender = gender
        customerInfo.age = age
        customerInfo.email = email
        customerInfo.phoneNo = phone
        customerInfo.address = `${cityOfResidence}, ${countryOfResidence}`
        customerInfo.transactionId = "asdasdasXasdasda2sadad"
        customerInfo.timeOfBooking = new Date().getTime()
        customerInfo.transactionId = "AXSSSS123122SKA1"
        dispatch(setCustomerInfo(customerInfo))
    }

    return (
        <div className={`z-20 fixed top-0 left-0 w-full h-full bg-gray-400/90 opacity-0 pointer-events-none transition-opacity duration-300 ease-in-out ${modal ? 'opacity-100 pointer-events-auto' : ''}`}>
            <div className={`z-20 top-0 left-0 min-h-screen h-full min-w-full flex justify-end transform translate-x-${modal ? '0' : 'full'} transition-transform duration-300 ease-in-out`}>
                <div className="overflow-auto bg-white">
                    {paymentView ? <Payments setPayments={setPaymentView} /> :
                        <div className="min-h-screen h-full w-[100vw] md:w-[40vw] bg-white transform-translate-x-[50%] ">
                            <div className="w-full p-5 flex justify-between items-center border-b border-solid border-gray-300 font-medium text-md">
                                <div>
                                    Passenger Details
                                </div>
                                <div onClick={() => dispatch(setModal(false))}>
                                    <GrNext />
                                </div>
                            </div>
                            <div className="w-full p-5 flex items-center border-b border-solid border-gray-300 shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)] py-5 font-medium text-md">
                                <div className="bg-[#6ec7b4] rounded-full w-7 h-7 p-1 flex items-center justify-center">
                                    <IoPersonOutline style={{ color: "white" }} />
                                </div>
                                <p className="ml-5">
                                    Passenger Information
                                </p>
                            </div>
                            <div className=" mt-5 mb-2 mx-5 p-5 border border-solid border-gray-200 shadow-md">
                                <div>
                                    <div className="my-2 text-sm text-gray-500">
                                        Passenger | Seat
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Enter Name" className="w-full p-1 border border-solid border-gray-400 rounded-sm" onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="flex justify-between my-4">
                                    <div>
                                        <p className="pb-1 text-sm text-gray-500">Gender</p>
                                        <div className="flex gap-2">
                                            <div>
                                                <input type="radio" name="gender" id="male" value="male" onClick={() => setGender("male")} />
                                                <label htmlFor="male" className="px-2">Male</label>
                                            </div>
                                            <div>
                                                <input type="radio" name="gender" id="female" value="female" onClick={(e) => setGender("female")} />
                                                <label htmlFor="female" className="px-2">Female</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="pb-1 text-sm text-gray-500">Age</p>
                                        <input type="number" name="age" className="p-1 border border-solid border-gray-400 rounded-sm" placeholder="Enter Age" onChange={(e) => setAge(e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className="pb-1 text-sm text-gray-500">City of Residence*</p>
                                        <input type="text" name="CityOfResidence" className="w-full p-1 border border-solid border-gray-400 rounded-sm" placeholder="Enter City of Residence" onChange={(e) => setCityOfResidence(e.target.value)} />
                                    </div>
                                    <div className="my-4">
                                        <p className="pb-1 text-sm text-gray-500">State of Residence*</p>
                                        <input type="text" name="StateOfResidence" className="w-full p-1 border border-solid border-gray-400 rounded-sm" placeholder="Enter State of Residence" onChange={(e) => setCountryOfResidence(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="h-3 w-full border-b border-solid border-gray-200 shadow-md text-transparent">
                                .
                            </div>
                            <div>
                                <div className="p-5 flex items-center border-b border-solid border-gray-300 shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)] py-5 font-medium text-md">
                                    <div className="bg-[#f4ad50] rounded-full w-7 h-7 p-1 flex items-center justify-center">
                                        <MdOutlineEmail style={{ color: "white" }} />
                                    </div>
                                    <p className="pl-5 font-medium text-md">Contact Details</p>
                                </div>
                                <div className="my-2 mx-5 p-5 border border-solid border-gray-200 shadow-md">
                                    <div className=" py-1">
                                        <p className="w-fit min-w-[25rem] px-1 text-sm bg-[#ffef8c] rounded-md text-gray-500">Your ticket will be sent to these details</p>
                                    </div>
                                    <div className="">
                                        <p className="pb-1 text-sm text-gray-500">Email ID</p>
                                        <input type="email" name="emailID" className="w-full p-1 border border-solid border-gray-400 rounded-sm" placeholder="Enter Email ID" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="my-2">
                                        <p className="pb-1 text-sm text-gray-500">Phone</p>
                                        <div className="grid grid-cols-8 gap-5">
                                            <input type="text" name="phonecode" className="col-span-2 w-full p-1 border border-solid border-gray-400 rounded-sm text-sky-600 font-semibold" value={"+91"} onChange={() => { }} />
                                            <input type="number" name="phoneno" className="col-span-6 w-full p-1 border border-solid border-gray-400 rounded-sm" placeholder="Enter Phone Number" max={9999999999} onChange={(e) => setPhone(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-3 w-full border-b border-solid border-gray-200 shadow-md text-transparent">
                                .
                            </div>
                            <div className="p-5 flex items-center border-b border-solid border-gray-300 shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)] py-5 text-sm text-gray-500">
                                <input type="checkbox" name="terms" onClick={() => setTermsAccepted(!termsAccepted)} />
                                <label htmlFor="terms" className="pl-2">By clicking on checkbox, I agree that I have read and understood the TnCs and the Privacy Policy</label>
                            </div>
                            <div className="p-5 flex justify-between">
                                <p className="text-md font-semibold">Total Cost : <span className="text-lg font-bold">{currency}  {price}</span></p>
                                <button className={`px-5 py-2 text-white ${termsAccepted && name && email && phone && cityOfResidence && countryOfResidence ? "bg-red-500/90 hover:bg-red-500/70" : "disabled bg-gray-400 cursor-not-allowed"}`}  disabled={!termsAccepted || !name || !email || !phone || !cityOfResidence || !countryOfResidence} onClick={() => paymentHandler()}>Proceed to Pay</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CustomerInfo;