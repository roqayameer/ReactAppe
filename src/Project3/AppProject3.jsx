// decrement and increament
import React,{useState} from "react";

export default function AppProject3() {
  const [number, setnumber] = useState(0);
  const deccrement = () => {
    if (number > 0) {
      setnumber(number - 1);
    } else {
      setnumber(0);
    }
    alert("You have reached your limit of decreasing number");
  };

  return (
    <div className="contener my-5">
      <div className="text-center">
        <h1 className="text-dark">{number}</h1>
        <button
          className="btn btn-warning mx-3"
          onClick={() => {
            setnumber(number + 1);
          }}
        >
          increment
        </button>
        <button className="btn btn-danger" onClick={deccrement}>
          decrement
        </button>
      </div>
    </div>
  );
}
