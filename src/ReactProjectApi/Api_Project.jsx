import axios from "axios";
import React, { useState } from "react";
import "./ApiStyle.css";
export default function Api_Project() {
  const [number, setnumber] = useState(1);
  const [title, settitle] = useState([]);
  const [description, setdescription] = useState([]);
  const [image, setimage] = useState([]);
  async function getdata() {
    const responsev = await axios.get(
      `https://fakestoreapi.com/products/${number}`
    );
    settitle(responsev.data.title)
    setdescription(responsev.data.description)
    setimage(responsev.data.image)
  }
  getdata();
  return (
    <>
      <h1>our Project</h1>
      <div className="app">
        <select
          value={number}
          onChange={(e) => {
            setnumber(e.target.value);
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
        <h1>Prodect {number} List her:</h1>
        <div className="prodect">
          <h1>{title}</h1>
          <img src={image} alt="" />
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
