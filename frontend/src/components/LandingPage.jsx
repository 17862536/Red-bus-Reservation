import buslogo from "../assets/To.jpg";
import calender from "../assets/from.jpg";
import swap from "../assets/Swap.jpg";
import Input from "./Input";
// import Hero from "../assets/HeroImage.png";
import { useSelector, useDispatch } from "react-redux";
import { setFromLoc, setToLoc, setDate, setDateInput } from "../redux/busSlice";
import {
  setTripList,
  setLocationsListFrom,
  setLocationsListTo,
} from "../redux/tripSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function LandingPage() {
  const [dateVal, setDateVal] = useState(
    useSelector((state) => state.bus.dateInput)
  );
  const fromLoc = useSelector((state) => state.bus.fromLoc);
  const toLoc = useSelector((state) => state.bus.toLoc);
  const dateInput = useSelector((state) => state.bus.dateInput);

  const dispatch = useDispatch();

  const handleSwap = () => {
    dispatch(setToLoc(fromLoc));
    dispatch(setFromLoc(toLoc));
  };

  const setFrom = (e) => {
    dispatch(setFromLoc(e));
  };

  const setTo = (e) => {
    dispatch(setToLoc(e));
  };
  const locationListFrom = useSelector(
    (state) => state.trips.locationsListFrom
  );
  const locationListTo = useSelector((state) => state.trips.locationsListTo);
  const searchClick = () => {
    axios
      .get(`http://127.0.0.1:5000/trips`)
      .then(
        //TODO add filets for form and to location - backend API needed
        (res) => {
          dispatch(setTripList(res.data));
        }
      )
      .catch((err) => {
        console.log(err);
      });
  };

  const dateChange = (e) => {
    setDateVal(e);
    dispatch(setDateInput(e));
    const date = Date.parse(e);
    dispatch(setDate(date));
  };
  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/location?districts=${fromLoc}`).then( //TODO add filets for form and to location - backend API needed
      (res) => {
        dispatch(setLocationsListFrom(res.data.data))
      }
    ).catch((err) => {
      console.log(err)
    })
  }, [dispatch, fromLoc])

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/location?districts=${toLoc}`).then( //TODO add filets for form and to location - backend API needed
      (res) => {
        dispatch(setLocationsListTo(res.data.data))
      }
    ).catch((err) => {
      console.log(err)
    })
  }, [dispatch, toLoc])

  return (
    <div className="min-h-[80vh] 2xl:min-h-[90vh] bg-gradient-to-b from-cyan-100 to-teal-50 grid justify-center items-center">
      <div className="p-5">
        <h2 className="py-10 sm:text-2xl md:text-3xl xl:text-5xl font-bold text-center text-sky-600">
          India's most simple trip search application!
        </h2>
        <div className="min-h-[15vh] bg-white rounded-[50px] flex flex-wrap">
          <Input
            name={"From"}
            type={"text"}
            img={buslogo}
            placeholder={fromLoc}
            onChangeFunc={setFrom}
            locationList={locationListFrom || []}
          />

          <div className="w-10 h-10 m-auto bg-gray-50 border-2 border-gray-400 rounded-full overflow-hidden">
            <button onClick={() => handleSwap()} className="w-full mx-auto">
              <img
                src={swap}
                alt="Swap From and To locations"
                className="w-full mx-auto"
              />
            </button>
          </div>
          <Input
            name={"To"}
            type={"text"}
            img={buslogo}
            placeholder={toLoc}
            onChangeFunc={setTo}
            locationList={locationListTo|| []}
          />

          <Input name={"Date"} type={"date"} img={calender}   onChangeFunc={dateChange} text={"text-2xl"} min={dateInput} placeholder={dateVal} />
          <div className="w-full lg:w-auto">
            <div className="h-full w-full p-10 bg-[#d84e55] hover:bg-red-400 text-white flex justify-center rounded-r-full overflow-hidden" onClick={()=>searchClick()}>
              <p className="my-auto text-3xl font-bold">
              
                <Link className="nav-link " to="/booking">
                  Serch Tips
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
