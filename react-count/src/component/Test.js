import React from 'react'
import { useEffect,useState } from 'react'
export  const Test = () => {
   const[postId,setPostId]=useState(1);
   const [post,setPost]=useState(false)
   useEffect(()=>{
      console.log('component ilk yuklendi')
      return(
         ()=>{console.log("destroy");}
      )
   },[]) 


      
   useEffect(()=>{
     
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res=>res.json())
      .then(data=>setPost(data))
     
      
   },[postId])


  return (
   <div>
      <h3>{postId}</h3>
      {post && JSON.stringify(post)}
      <button onClick={()=>setPostId(postId=>postId+1)}>artir</button>
      <hr/>
      Test
   </div>
  )
}

