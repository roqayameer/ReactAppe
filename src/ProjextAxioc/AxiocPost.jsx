import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const apilink = "https://jsonplaceholder.typicode.com/todos";
export default function AxiocPost() {
  const [post, setpost] = useState([]);
  useEffect(() => {
    const data = axios.get(`${apilink}/1`).then((respons) => {
      setpost(respons.data);
    });
  }, []);
  const postrequest = () => {
    axios
      .post(apilink, { title: "my name roqaya ameer saheep" })
      .then((respons) => {
        setpost(respons.data);
      });
  };
  return (
    <>
      <h1>Axioc Post</h1>
      <span>{post.title}</span>
      <button onClick={postrequest}>Post</button>
    </>
  );
}
