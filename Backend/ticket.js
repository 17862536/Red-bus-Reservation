const { main } = require("./db");
const { ObjectId } = require("mongodb");
const constant = require("./constant");

// post the ticket data to the db
exports.postTicket = async (req, res) => {
  const { name, age, email, gender, address, phoneNo, tripId } = req.body;

  //   if data exist in request body
  if (name && age && email && gender && address && phoneNo && tripId) {
    try {
      // fetching data from database
      const db = await main();

      //   finding  trip  data from database
      const trip_Id = await db
        .collection("trips")
        .findOne({ _id: new ObjectId(tripId) });

      // posting the data to ticket  collection
      const ticketsData = await db.collection("tickets").insertOne({
        name: name,
        age: age,
        email: email,
        gender: gender,
        mobile: phoneNo,
        Adress: address,
        tripId: tripId,
      });

      //  if ticket data inserted in data base
      if (ticketsData) {
        res.status(200).send({ data: "suceess" });
      }
    } catch (err) {
      return res.status(500).send("server Error");
    }
  }

  //if data does'nt exist in request body
  else {
    return res.status(400).send(constant.BAD_REQUEST);
  }
};
