/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import '../index.css';

function TopButtons({setQuery}) {
  const cities = [
    {
      citiName: "Dehli",
      id: "101",
    },
    {
      citiName: "Mumbai",
      id: "102",
    },
    {
      citiName: "Kolkata",
      id: "103",
    },
    {
      citiName: "Bhubaneswar",
      id: "104",
    },
  ];

  return (
    <div className="flex items-center justify-around my-7">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium" onClick={()=>setQuery({q: city.citiName})}>
          {city.citiName}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
