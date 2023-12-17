import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import CheckoutForm from "./CheckoutForm";

function Payments({ setPayments }) {
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const currentItenary = useSelector(state => state.trips.currentTrip)
    const totalSeats = useSelector(state => state.trips.totalSeatsBooked)
    const amount = currentItenary.busFare * totalSeats
    console.log(typeof(amount))

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/config").then(async (res) => {
            const { publishableKey } = res.data
            setStripePromise(loadStripe(publishableKey))
        })
    }, [])

    useEffect (() => {
        axios.post('http://127.0.0.1:5000/payment', {
            amount: amount,
            curr: "INR"
        }).then(async (res) => {
            const { clientSecret } = res.data
            setClientSecret(clientSecret)
        })
    }, [amount])
    return (
        <div className="min-w-[40vw] p-5 bg-white transform-translate-x-[50%]">
            <div className="w-full p-5 justify-between items-center border-b border-solid border-gray-300 font-medium text-md">
                <div className="pb-5 mb-5 text-lg border-b border-solid border-gray-300">
                    <h1>Payments</h1>
                </div>
                {stripePromise && clientSecret &&
                    <Elements stripe={stripePromise} options={{ clientSecret }}>
                        <CheckoutForm setPayments={setPayments} itenary={currentItenary} />
                    </Elements>}
            </div>
        </div>
    );
}

export default Payments;