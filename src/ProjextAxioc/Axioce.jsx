import axios from "axios";
import React, { useEffect, useState } from "react";
const apiLink = "https://jsonplaceholder.typicode.com/todos";
export default function Axioce() {
  const [post, setpost] = useState([]);
  console.log(post);
  useEffect(() => {
    const data = axios.get(apiLink).then((respons) => {
      setpost(respons.data);
    });
  }, []);
  return (
    <div>
      {post.map((value) => {
        return (
          <>
            <span>{value.title}</span>
          </>
        );
      })}
    </div>
  );
}
