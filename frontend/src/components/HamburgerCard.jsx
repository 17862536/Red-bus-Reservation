function HamburgerCard({ optionsArray = [], ticket = false, statemod}) {
    return (
      <div
        className={` z-20 grid grid-cols-1 absolute top-[11vh] ${
          ticket ? "right-20" : "right-2"
        } border border-green-300 bg-white rounded-lg overflow-hidden` }
        onMouseLeave={()=>statemod(false)}
      >
        {optionsArray.map((item) => (
          <div className="p-5 font-semibold w-full bg-green-300 hover:bg-green-200 text-white">
            {item}
          </div>
        ))}
      </div>
    );
  }
  
  export default HamburgerCard;