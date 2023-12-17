
const dotenv = require("dotenv");
dotenv.config()

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-08-01",
});

exports.postPayment = async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            currency: req.body.curr || "INR",
            amount: parseFloat(req.body.amount),
            automatic_payment_methods: { enabled: true },
        });

        // Send publishable key and PaymentIntent details to client
        res.status(200).send({
            message:"success",
            clientSecret: paymentIntent.client_secret,
        });
    } catch (e) {
        return res.status(400).send({
            message: "bad request",
            error: {
                message: e.message,
            },
        });
    }
}