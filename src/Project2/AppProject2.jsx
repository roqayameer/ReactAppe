// project about number letter and speaces
import React, { useState } from "react";

export default function AppProject2() {
  const [textarea1, settextarea1] = useState("");
  const [preaviw, setpriveiw] = useState("");
  const clearData = () => {
    settextarea1("");
  };
  const handeldata = (e) => {
    settextarea1(e.target.value);
  };
  const handelpr = () => {
    setpriveiw(textarea1);
  };
  return (
    <>
      <div className="contener my-5">
        <textarea
          cols="30"
          rows="10"
          className="w-100"
          onChange={handeldata}
          value={textarea1}
        >
          {textarea1}
        </textarea>
        <button className="btn btn-dark" onClick={clearData}>
          clear data
        </button>
        <p>{preaviw}</p>
        <button onClick={handelpr} className="btn btn-success">
          preavi data
        </button>
        <p className="text-center text-danger">
          {textarea1.length} The number of letters in the text
        </p>
        <p className="text-center text-success">
          {textarea1.split(" ").length}  The number of spaces in the
          text
        </p>
      </div>
    </>
  );
}
