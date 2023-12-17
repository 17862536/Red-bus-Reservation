import { useEffect, useState } from "react";
const Input = ({
  img,
  type,
  name,
  placeholder,
  onChangeFunc = () => {},
  locationList = null,
  text = "text-3xl",
  min = null,
}) => {
  const [listArray, setListArray] = useState([]);
  useEffect(() => {
    if (locationList) {
      setListArray([])
      for (let i = 0; i < locationList.length; i++) {
        setListArray((prev) => [...prev, ...locationList[i].districts])
      }
    }
  }, [locationList])

  const [isMenuVisible, setMenuVisible] = useState(false);

  const showMenu = () => {
    setMenuVisible(true);
  };

  const hideMenu = () => {
    setMenuVisible(false);

  };
  
  
  return (
    <div className="relative flex flex-nowrap mx-2 ">
    <div className="mx-2 my-auto">
     {img && <img src={img} alt={name} />}
    </div>
    <div className="mx-2 my-auto">
      <p className="my-1 text-2xl text-gray-400 font-semibold">{name}</p>
      <input
        type={type}
        value={placeholder}
        className={`py-5 ${text} font-semibold outline-none max-w-[180px]`}
        onChange={(e) => onChangeFunc(e.target.value)}
        onFocus={showMenu}
        onBlur={hideMenu}
        min={min}
      />
    </div>
    {locationList && isMenuVisible && (
      <ul className=" absolute max-h-[20vh] 2xl:max-h-[25vh] w-[15vw] overflow-auto top-[100%] left-0 border border-gray-300 bg-white text-black font-semibold shadow-md rounded-lg text-center">
        {listArray.map((location, i) => (
          <li key={i} className="py-2 px-4 cursor-pointer hover:bg-gray-100 p-2" onMouseDown={() => onChangeFunc(location)}> {location}</li>
        ))}
      </ul >
    )
    }
  </div >
  );
};

export default Input;
