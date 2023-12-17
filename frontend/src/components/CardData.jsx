import React from "react";
import BusTripCard from "./BusTripCard";
import { useSelector } from "react-redux";

const CardData = () => {
  const data = useSelector((state) =>state.trips.tripList)
  
  // {

  //   status: "okk",
  //   data: [

  //     {
  //       _id: "6555dbc45af9b5288bd2a588",
  //       date: 1673980200000,
  //       from: "ChIJL_P_CXMEDTkRw0ZdG-0GVvw",
  //       to: "ChIJbU60yXAWrjsR4E9-UejD3_g",
  //       busOwnerID: 123,
  //       startTime: 1673980200000,
  //       EndTime: 1673980200000,
  //       category: "A/C Sleeper (2+1)",
  //       SeatBooked: ["1UA", "3UA", "4LB", "4LC"],
  //       bus_no: "",
  //       animeties_list: [
  //         "Live Tracking",
  //         "Policies",
  //         "Photos",
  //         "Amenities",
  //         "Reviews",
  //       ],
  //       busFare: 850,
  //       busName: "IntrCity Smart Bus",
  //     },
  //     {
  //       _id: "6555dbc45af9b5288bd2a589",
  //       date: 1673980200000,
  //       from: "ChIJL_P_CXMEDTkRw0ZdG-0GVvw",
  //       to: "ChIJbU60yXAWrjsR4E9-UejD3_g",
  //       busOwnerID: 124,
  //       startTime: 1673980200000,
  //       EndTime: 1673980200000,
  //       category: "A/C Sleeper (2+1)",
  //       SeatBooked: ["2UA", "4UA", "5LB", "5LC"],
  //       bus_no: "",
  //       animeties_list: [
  //         "Live Tracking",
  //         "Policies",
  //         "Photos",
  //         "Amenities",
  //         "Reviews",
  //       ],
  //       busFare: 850,
  //       busName: "Eicher Motors",
  //     },
  //     {
  //       _id: "6555dbc45af9b5288bd2a58a",
  //       date: 1674066600000,
  //       from: "ChIJL_P_CXMEDTkRw0ZdG-0GVvw",
  //       to: "ChIJbU60yXAWrjsR4E9-UejD3_g",
  //       busOwnerID: 124,
  //       startTime: 1673980200000,
  //       EndTime: 1673980200000,
  //       category: "A/C Sleeper (2+1)",
  //       SeatBooked: ["2UA", "4UA", "5LB", "5LC"],
  //       bus_no: "",
  //       animeties_list: [
  //         "Live Tracking",
  //         "Policies",
  //         "Photos",
  //         "Amenities",
  //         "Reviews",
  //       ],
  //       busFare: 850,
  //       busName: "Eicher Motors",
  //     },
  //     {
  //       _id: "655d18575676bba5ce54ace0",
  //       date: 1673980200000,
  //       from: "ChIJL_P_CXMEDTkRw0ZdG-0GVvw",
  //       to: "ChIJbU60yXAWrjsR4E9-UejD3_g",
  //       busOwnerID: "6555dbdc5af9b5288bd2a58b",
  //       startTime: 1673980200000,
  //       EndTime: 1673980200000,
  //       category: "A/C Sleeper (2+1)",
  //       bus_no: "123",
  //       busFare: 850,
  //       animeties_list: [
  //         "Live Tracking",
  //         "Policies",
  //         "Photos",
  //         "Amenities",
  //         "Reviews",
  //       ],
  //       busName: "IntrCity Smart Bus",
  //       SeatBooked: [],
  //     },
  //     {
  //       _id: "655d185e5676bba5ce54ace1",
  //       date: 1673980200000,
  //       from: "ChIJL_P_CXMEDTkRw0ZdG-0GVvw",
  //       to: "ChIJbU60yXAWrjsR4E9-UejD3_g",
  //       busOwnerID: "6555dbdc5af9b5288bd2a58b",
  //       startTime: "1673980200000",
  //       EndTime: "1673980200000",
  //       category: "A/C Sleeper (2+1)",
  //       bus_no: "123",
  //       busFare: 850,
  //       animeties_list: [
  //         "Live Tracking",
  //         "Policies",
  //         "Photos",
  //         "Amenities",
  //         "Reviews",
  //       ],
  //       busName: "IntrCity Smart Bus",
  //       SeatBooked: [],
  //     },
  //   ],
  // };
  return (
    <>
    
  { data && <div className="grid grid-cols-1 m-5">
        <div className="col-span-1 xl:grid grid-cols-7 hidden justify-between text-gray-500 font-normal text-sm">
            <p className="col-span-2"><span className="font-bold text-black">{data.data.length} Trips</span> Found</p>
            <p className="col-span-1">Departure</p>
            <p className="col-span-1">Duration</p>
            <p className="col-span-1">Arrival</p>
            <p className="col-span-1">Rating</p>
            <p className="col-span-1">Fare</p>
        </div>
        <div className="grid grid-cols-1">
            {data.data.map((itenary,i) => (
                <div key={itenary._id}>

                    <BusTripCard itenary={itenary} index={i} />
                </div>
            ))}
        </div>
    </div>}
    </>
);
};

export default CardData;
