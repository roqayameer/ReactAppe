// Handel froms
import React, { useState } from "react";

export default function Formsr() {
  const [name, setName] = useState("");
  const [mobail, setMobaile] = useState("");
  const [mynewDate, setMynewDate] = useState([]);
  const submitDate = (e) => {
    e.preventDefault();
    const newDate = {name, mobail };
    setMynewDate([...mynewDate, newDate]);
  };
  return (
    <>
      <div classNameName="container my-5 text-center">
        <form onSubmit={submitDate}>
          <div>
            <input
              type="text"
              placeholder="enter your name"
              classNameName="w-50 my-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="enter your Mobile"
              classNameName="w-50 my-3 py-2"
              value={mobail}
              onChange={(e) => setMobaile(e.target.value)}
            />
          </div>
          <div>
            <button classNameName="btn btn-dark" type="submit">
              submite
            </button>
          </div>
        </form>
        <div>
          {mynewDate.map((value) => {
            return (
              <>
                <h1>{value.name}</h1>
                <h1>{value.mobail}</h1>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
