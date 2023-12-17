const dotenv = require("dotenv");

dotenv.config()

exports.getConfig = async (req, res) => {
    res.status(200).send({
        message: "sucess",
        publishableKey: process.env.STRIPE_PUBLIC_KEY,
    });
}