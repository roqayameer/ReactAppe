// Opject update in uesstate
import React from "react";
import { useState } from "react";

export default function AppOpject() {
  const [text, setTaxt] = useState({
    name: "Roqaya",
    place: "aaaa",
    langueg: "React.js",
  });
  const updeatData = () => {
    setTaxt({ ...text, name: "Mohamed" });
  };
  return (
    <div className="container">
      <h1>{text.name}</h1>
      <h1>{text.place}</h1>
      <h1>{text.langueg}</h1>
      <button onClick={updeatData}>click me</button>
    </div>
  );
}
