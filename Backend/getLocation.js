const { main } = require("./db");

exports.getLocation = async (req, res) => {
  const query = req.query.districts;
  const regexPattern = new RegExp(query, "i");

  const filter = { districts: regexPattern };

  try {
    const db = await main();
    // getting data from the db
    const User = await db
      .collection("state_district")
      .aggregate([
        { $match: filter },
        {
          $project: {
            _id: 1,
            state: 1,
            districts: {
              $filter: {
                input: "$districts",
                as: "district",
                cond: {
                  $regexMatch: { input: "$$district", regex: regexPattern },
                },
              },
            },
          },
        },
      ])
      .toArray();
    res.send({ status: "okk", data: User });
  } catch (err) {
    return res.status(500).send(err);
    console.log(err);
  }
};
