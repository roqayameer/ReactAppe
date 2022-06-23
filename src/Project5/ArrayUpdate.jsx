// Arrays update in uesstate
import React from "react";
import { useState } from "react";

export default function AppProject5() {
  const Date = [
    { name: "Roqaya", age: "25" },
    { name: "Roqaya", age: "25" },
  ];
  const [text, setText] = useState(Date);
  const updeat = () => {
    setText([
      { name: "Ameer", age: "25" },
      { name: "Ameer", age: "25" },
    ]);
  };
  return (
    <>
      {text.map((value) => {
        return(<>
        <h1>{value.name}</h1>
        </>)
      })}
      <button onClick={updeat}>click</button>
    </>
  );
}
