import React, { useState } from "react";
import Frinds from "./Frinds";
const Data = [
  { id: 0, name: " Roqaya" },
  { id: 1, name: " Roqaya" },
  { id: 2, name: " Roqaya" },
  { id: 3, name: " Roqaya" },
  { id: 4, name: "Roqaya " },
  { id: 5, name: "Roqaya " },
];
export default function Test() {
  const [frend, setfrind] = useState(Data);
  return (
    <div className="app">
      <h1>Number of Frindes {frend.length}</h1>
      <Frinds fren={frend} />
      <button className="btn" onClick={()=>{setfrind([])}}>clear get</button>
      <button className="btn" onClick={()=>{setfrind(Data)}} >Get get</button>
    </div>
  );
}
