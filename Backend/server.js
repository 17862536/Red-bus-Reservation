const express = require("express");
const dotenv = require("dotenv");
const { postTrips } = require("./post");
const { postTicket } = require("./ticket");
const {main} =require("./db");
const { getTrips } = require("./getTrips");
dotenv.config();



const app = express();

// middleware
app.use(express.json());


// api route to get trip data
app.get("/trips",getTrips );

// api route to post trips
app.post("/trips" , postTrips) 

// api route to post ticket
app.post("/ticket" , postTicket) 

// starting the server
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

module.exports = main;
