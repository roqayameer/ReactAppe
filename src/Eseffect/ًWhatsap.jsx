import React, { useEffect, useState } from "react";

export default function Whatsap() {
  const [number, setnumber] = useState(0);
  useEffect(()=>{
    document.title = `you have a messge ${number}`
    console.log(number)
  })
  return (
    <div>
      <h1>number of massegg {number}</h1>
      <button
        className="btn align-content-md-center"
        onClick={() => {
          setnumber(number + 1);
        }}
      >
        click me
      </button>
    </div>
  );
}
