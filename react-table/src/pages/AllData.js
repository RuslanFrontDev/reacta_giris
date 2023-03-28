import React, { useEffect } from 'react'
import { useState } from 'react';
//axios
import axios from "axios";

const AllData = () => {
  const [state,setState]=useState(false)
  console.log(state)
  console.log(state);
  useEffect(()=>{
    axios.get("http://localhost:9000/get_allusers")
    .then(res=>setState(res.data))
  },[])
  return (
    <div className='data'>
      {state && JSON.stringify(state)}
    </div>
  )
}

export default AllData

// {state && state.map((item,index)=>{
//   return <h2 key ={index}>{item.name}{item.email}</h2>
// })}


//form icine salanda qayda
//2--data niye array olaraq geldi([user] buna goremi)
//3-- reqemler string kimi geldi onu number etmek ucun +hara qoyulur, ve ya parseInt
