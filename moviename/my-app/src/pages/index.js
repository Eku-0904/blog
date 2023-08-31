import { useState } from "react"

export default function Home() {

const [comment, setComment] = useState("")

  function handleType(event) {
    if (event.key === "Enter") {
      console.log(event.target.value);
      let newComment = [event.target.value];
      setComment(event.target.value);
      event.target.value = "";
    }
  }
  return (
   
  <div style={{
    width:"700px",
   
    minHeight:"900px",
    border:"2px solid black",
    margin:"150px auto",
    display:"flex",
    justifyContent:"center",
    borderRadius:"40px",
    flexDirection:"column"
    
  }}>
    <div style={{
      display:"flex",
      alignItems:"center",
      flexDirection:"column"
    }}>
    <p style={{
      fontSize:"48px",
      }}
    >{comment}</p>
     </div>
   <img style={{
      height:"450px",
      margin:"20px",
      borderRadius:"20px"
  }} src="oppenheimer.jpeg" />
    <div style={{
      display:"flex",
      justifyContent:"center",
    }}>
      <input style={{
        marginTop:"50px",
        marginBottom:"50px",
        width:"200px",
        borderRadius:"10px"
      }} onKeyDown={handleType} placeholder="             Type movie name" />
      </div>
  </div>
  )
}
