
const {main} = require("./db")

exports.getTrips = async (req, res) => {
// geeting data from the query
  const { date,from,to, startTime,EndTime,category,busName,busFare} =req.query
  // filtering the data
  const filter ={}
  if(date)filter.date =date
  if(from)filter.from =from
  if(to)filter.to =to
  if(startTime)filter.startTime = startTime
  if(EndTime)filter.EndTime =EndTime
  if(category)filter.category = category
  if(busFare)filter.busFare ={$lte: parseInt( busFare)}
  if(busName){
// filtering the name with regex
  const escapedOperator = busName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regexPattern = new RegExp(escapedOperator, "i");
  filter.busName = {$regex:regexPattern}
  }

    try {
        const db =await main()
        // getting data from the db
      const User = await db.collection("trips").find(filter).toArray();
      res.send({ status: "okk", data: User });
    } catch (err) {
    return  res.status(500).send(err)
      console.log(err);
    }
  }