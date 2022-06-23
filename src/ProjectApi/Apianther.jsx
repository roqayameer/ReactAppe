import React, { useEffect, useState } from "react";
import "./Apifetch.css";
export default function Apianther() {
  const [fack, setfack] = useState([]);
  console.log(fack);
  const fakstoruy = async () => {
    const responsev = await fetch("https://fakestoreapi.com/products");

    const jsonfack = await responsev.json();

    setfack(jsonfack);
  };
  useEffect(() => {
    fakstoruy();
  }, []);
  return (
    <>
      <h2>Fake Api store</h2>
      <div className="container">
        {fack.map((values) => {
          return (
            <div className="box">
              <div className="content">
                <h5>{values.title}</h5>
                <p>{values.description}</p>
              </div>
              <img src={values.image} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
}
