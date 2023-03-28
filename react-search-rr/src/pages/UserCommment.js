import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserCommment = () => {
   const [comments,setComments]=useState(false)
   useEffect(()=>{
      axios.get('http://localhost:9000/get_allusers')
      .then(res=>setComments(res.data))
   },[])
 
  return (
    <div>
      {comments && comments.map((item,index)=>(
        <table key={index}>
          <thead>
            <tr>
              <th className='n'>N1</th>
              <th>Ad</th>
              <th>Soyad</th>
              <th>Email</th>
              <th>Rəy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='user'>dəyərli müştəri</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.textarea}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  )
}

export default UserCommment