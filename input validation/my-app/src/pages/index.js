import React, { useState, useEffect } from "react"
export default function Home() {
  const [ count, setCount ] =useState(0)
  const [isValid, setIsValid] = useState(false)
  const [word, setWord] =useState("")


  useEffect(() => {
    console.log("use effect working")
    if(word.includes("@")){
      setIsValid(true)
    }else{
      setIsValid(false)
    }
    alert("count n state uurchlugdluu")
  }, [count, word])
  return (
    <>
      <h2>Input</h2>
      <button onClick={()=>setCount(count+1)}>Add count</button>
      <h3>{count}</h3>
      <input
        type="text"
        id="input"
        autoComplete="off"
        onChange={(event)=>setWord(event.target.value)}
        style={{ height: "1.5rem", width: "20rem", marginTop: "1rem" }}
      />
      <p>
        <span
          style={
            isValid
              ? { backgroundColor: "lightgreen", padding: ".5rem" }
              : { backgroundColor: "lightpink", padding: ".5rem" }
          }
        >
          {isValid ? "Valid input" : "Input not valid"}
        </span>
      </p>
    </>
  )
}
