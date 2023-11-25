import bus from "../assets/rdc-redbus-logo.svg";

import Rlogo from "../assets/logo.jpg"
import { useState } from "react";
import HamburgerCard from "./HamburgerCard";
function Navbar() {
  const options = ["Tickets", "Help", "Blog"];
  const userOptions = [
    "Cancel Ticket",
    "Change Travel Date",
    "Show My Ticket",
    "Email/Sms",
    "Login/Sign Up",
  ];
  const [hamburger, setHamburger] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  return (
    <div>
      <div className="h-[10vh] w-full p-2 bg-green-300 flex flex-wrap justify-between">
        <div className="px-10 flex my-auto">
          <img
            src={bus}
            alt="Brand Logo of a bus"
            className="h-[60px] w-[60px] rounded-full"
          />
          <div className="my-auto px-5">
            <h1 className="text-3xl font-bold text-white">RESERVE</h1>
          </div>
        </div>
        <div className="flex">
          <div
            class="space-y-2 my-auto sm:hidden"
            onClick={() => setHamburger(!hamburger)}
          >
            <span class="block w-8 h-1 bg-white rounded-full"></span>
            <span class="block w-8 h-1 bg-white rounded-full"></span>
            <span class="block w-8 h-1 bg-white rounded-full"></span>
          </div>
          {hamburger ? (
            <HamburgerCard optionsArray={options} ticket={true} statemod={setHamburger} />
          ) : null}
          <div className="hidden sm:flex">
            {options.map((option) => (
              <div className="my-auto px-5">
                <h2 className="text-2xl font-semibold text-white">{option}</h2>
              </div>
            ))}
          </div>
          <div className="mx-5 my-auto rounded-full hover:outline-none hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-green-200">
            <img
              src={Rlogo}
              alt="User Icon"
              className="h-[45px] w-[45px] p-1 rounded-full bg-white"
              onClick={() => setUserMenu(!userMenu)}
            />
            {userMenu ? <HamburgerCard optionsArray={userOptions}  statemod={setUserMenu}/> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;