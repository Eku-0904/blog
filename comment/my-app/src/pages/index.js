import { useState } from "react"
export default function Home() {

const [comment, setComment] = useState([""]);
  function handleType(event) {
    if (event.key === "Enter") {
      console.log(event.target.value);
      let newComment = [...comment, event.target.value];
      setComment(newComment);
      event.target.value = "";
    }
  }
  return (
  <div>
    <div>
        {comment.map((comment, index) => (
        <p style={{
          fontSize:"48px",
          }}
        
        key={index}>{comment}</p>
      ))}
      <input onKeyDown={handleType} placeholder="Type..." />
      </div>
  </div>
  )
}
