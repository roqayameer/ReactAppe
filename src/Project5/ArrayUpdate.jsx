// Arrays update in uesstate
import React from "react";
import { useState } from "react";

export default function AppProject5() {
  const Data = [
    { name: "Roqaya", place: "aaaa" },
    { name: "Roqaya", place: "bbbb" },
  ];
  const [text, setTaxt] = useState(Data);
  const updeatData = () => {
    setTaxt([
      { name: "Ameer", place: "aaaa" },
      { name: "Ameer", place: "bbbb" },
    ]);
  };
  return (
    <>
      {text.map((value) => {
        return (
          <>
            <h2>{value.name}</h2>
          </>
        );
      })}
      <button onClick={updeatData}>click me</button>
    </>
  );
}
