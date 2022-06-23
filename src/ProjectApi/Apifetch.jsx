import React, { useState } from "react";
import { useEffect } from "react";
export default function Apifetch() {
const [data,setdata]=useState([])
const getData = async()=>{
  const respons = await fetch("https://jsonplaceholder.typicode.com/todos")
  const jesonData = await respons.json()
  setdata(jesonData)
}
useEffect (()=>{getData()},[])
  return (
    <>
      <h2>Api React Fetch</h2>
      <div className="text">
      {
        data.map((value)=>{
          return(<><p>{value.title}</p></>)
        })
      }
      </div>
    </>
  );
}
