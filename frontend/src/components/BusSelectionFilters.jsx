import { useState } from "react";
function BusSelectionFilters() {
  const filters = [
    {
      title: "Seat Availability",
      innerName: "seatAvailability",
      type: [
        { type: "Single Seats", value: "single seats" },
        { type: "Multi Seats", value: "multi seats" },
      ],
    },
    {
      title: "Operator",
      innerName: "operator",
      type: [
        { type: "Tata Motors", value: "tata motors" },
        { type: "Eicher", value: "eicher" },
        { type: "InState", value: "instate" },
      ],
    },
    {
      title: "Amenities",
      innerName: "amenities",
      type: [
        { type: "AC", value: "AC" },
        { type: "Non AC", value: "Non AC" },
      ],
    },
    {
      title: "Price",
      innerName: "busFare",
      type: [
        { type: "below 1k", value: 1000 },
        { type: "below 2k", value: 2000 },
        { type: "below 3k", value: 3000 },
      ],
    },
  ];

  const [filter, setFilter] = useState([]);

  function handleFilterChange(e, filterItem, val) {
    if (e.target.checked) {
      setFilter([...filter, { [filterItem]: val }]);
    } else if (!e.target.checked) {
        // console.log(filter)
      let newArr = filter.filter((item) => item[filterItem] !== val);
      console.log(filterItem)
    //   console.log( val, newArr);

      setFilter(newArr);
    }
    // console.log(filter);
  }

  return (
    <div>
      {filters.map((filter) => (
        <div className="grid grid-cols-1 m-5">
          <div className="mx-2 my-auto">
            <p className="my-1 text-2xl font-bold">
              {filter.title.toUpperCase()}
            </p>
          </div>
          {filter.type.map((type) => (
            <div className="flex flex-nowrap mx-10 my-2">
              <div className="mx-2 my-auto">
                <input
                  type="checkbox"
                  className="py-5 text-3xl font-semibold outline-none max-w-[180px]"
                  onChange={(e) => {
                    handleFilterChange(e, filter.innerName, type.value);
                  }}
                />
              </div>
              <div>
                <p className="my-1 text-2xl font-normal">{type.type}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default BusSelectionFilters;