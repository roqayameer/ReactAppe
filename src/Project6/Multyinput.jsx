// Handel Multy feilds save data
import React, { useState } from "react";

export default function Multyinput() {
  const [mynewDate, setMynewDate] = useState({
    name: "",
    mobail: "",
    email: "",
    pass: "",
  });
  const news = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setMynewDate((previousData) => {
      return{
     ...previousData,[name]:value}
    });
  };
  return (
    <>
      <div classNameName="container my-5 text-center">
        <form>
          <div>
            <input
              type="text"
              placeholder="enter your name"
              classNameName="w-50 my-3 py-2"
              value={mynewDate.name}
              name="name"
              onChange={news}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="enter your Mobile"
              classNameName="w-50 my-3 py-2"
              value={mynewDate.mobail}
              name="mobail"
              onChange={news}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="enter your Mobile"
              classNameName="w-50 my-3 py-2"
              value={mynewDate.pass}
              name="pass"
              onChange={news}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="enter your Mobile"
              classNameName="w-50 my-3 py-2"
              value={mynewDate.email}
              name="email"
              onChange={news}
            />
          </div>
          <div>
            <button classNameName="btn btn-dark" type="submit">
              submite
            </button>
          </div>
        </form>
       
      </div>
      <div>
        <h1>{mynewDate.name}</h1>
        <h1>{mynewDate.mobail}</h1>
        <h1>{mynewDate.email}</h1>
        <h1>{mynewDate.pass}</h1>
      </div>
    </>
  );
}
