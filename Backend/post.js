const main = require("./server");
const { ObjectId } = require("mongodb");
const constant = require("./constant");

// post the trips data to the db
exports.postTrips = async (req, res) => {
  // requesting the data from user
  const {
    date,
    from,
    to,
    busOwnerID,
    startTime,
    EndTime,
    category,
    bus_no,
    busFare
  } = req.body;

  //   if data exist in request body
  if (
    date &&
    from &&
    to &&
    busOwnerID &&
    startTime &&
    EndTime &&
    category &&
    bus_no &&
    busFare
  ) {
    try {
      // fetching data from database
      const db = await main();

      //   finding  bus owner data from database
      const busOwnerData = await db
        .collection("bus_owner")
        .findOne({ _id: new ObjectId(busOwnerID) });

      // posting the data to trips collection
      const tripsData = await db.collection("trips").insertOne({
        date: date,
        from: from,
        to: to,
        busOwnerID: busOwnerData._id,
        startTime: startTime,
        EndTime: EndTime,
        category: category,
        bus_no: bus_no,
        busFare: busFare,
        animeties_list: busOwnerData.animeties,

        busName: busOwnerData.name,
        SeatBooked: [],
      });
      //  if trips data inserted in data base
      if (tripsData) {
      return  res.status(200).send({ data: "suceess" });
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
