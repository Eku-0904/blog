import { useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  function darkmode(){
    setIsDark(!isDark)
    // if(mode == 'white') {
    //   setMode('black')
    // } else {
    //   setMode('white')
    // }
  } 

  return (
<div>
  <div style={{
    width:"100vw",
    height:"80vh",
    backgroundColor:`${isDark?"black":"white"}`,
    display:"flex",
    justifyContent:"center",
    border:`${isDark?"5px solid grey":"5px solid black"}`,
  }}>
    <div style={{
      width:"120px",
      height:"50px",
      borderRadius:"50px",
      backgroundColor:"grey",
      marginTop:"50px"
    }}
    onClick={darkmode}>
      <div 
      className={isDark?"innerCircle right":"innerCircle"}
      style={{
      
    }}></div>
      
    </div>
  </div>
</div>
  )
}
