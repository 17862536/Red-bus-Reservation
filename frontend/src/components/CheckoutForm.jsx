import { useState } from 'react';
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from 'react-redux';
import { setModal, setTicketModal } from "../redux/busSlice";
import axios from 'axios';

function CheckoutForm({ setPayments, itenary }) {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const dispatch = useDispatch()
    const customerInfo = useSelector(state => state.customerInfo.customerInfo)
    console.log(customerInfo)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessing(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "http://localhost:3000/completion",
            },
            redirect: "if_required",

        });

        if (error) {
            setMessage(error.message)
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
            setMessage("Payment Successful")
            setPayments(false)
            dispatch(setModal(false))
            dispatch(setTicketModal(true))

            //sending request to db to store details
            axios.post("http://127.0.0.1:5000/ticket", customerInfo).then((res) => {
                console.log(res.data)
            })
        } else {
            setMessage("Payment Failed")
        }

        setIsProcessing(false);
    }
    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement />
            <div className='flex justify-center'>
                <button disabled={isProcessing} id='submit' className='w-full my-10 min-w-[5vw] px-5 py-3 bg-sky-600 rounded-lg hover:bg-sky-500 text-white text-lg'>
                    <span id="button-text">
                        {isProcessing ? "Processing..." : 'Pay'}
                    </span>
                </button>
            </div>
            {message && <div id="payment-message">{message}</div>}
        </form>
    )
}

export default CheckoutForm;
