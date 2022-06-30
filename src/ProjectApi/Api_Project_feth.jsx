import React from 'react'
import { useState } from 'react'

export default function Api_Project_feth() {
    const [id,setid]=useState(1)

    const getfethcdata = async()=>{
        const respones =await fetch("https://fakestoreapi.com/products")
        const jsondata = respones.json()
        setid(jsondata)
    }
  return (
    <div>Api_Project_feth</div>
  )
}
