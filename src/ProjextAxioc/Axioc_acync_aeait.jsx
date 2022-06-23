import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const apiLink = "https://fakestoreapi.com/products";
export default function Axioc_acync_aeait() {
  const [title, settitle] = useState([]);
  const [image, setimage] = useState([]);
  const [description, setdescription] = useState([]);
  useEffect(() => {
    async function getdata() {
      const respons = await axios.get(`${apiLink}/10`);
      // console.log(respons)
      settitle(respons.data.title);
      setimage(respons.data.image);
      setdescription(respons.data.description);
    }
    getdata();
  }, []);
  return (
    <div className="prodect">
      <h1>{title}</h1>
      <img src={image} alt="" />
      <p>{description}</p>
    </div>
  );
}
