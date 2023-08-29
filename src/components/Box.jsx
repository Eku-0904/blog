
export function CityBox(props){
    console.log(props)
    return(
        <div  style={{width:"270px",height:"324px",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundColor:"white",borderRadius:"12px",marginBottom:"6px"}}>

        <div style={{backgroundImage:`url(${props.img})`,width:"270px",height:"120px",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundColor:"white",borderRadius:"12px",marginBottom:"18px"}}>
        </div>
            <h1 className="box" style={{color: "#25313C", marginLeft:"12px", fontSize: "18px",marginBottom:"18px"}}>{props.title}</h1>
            <p style={{whiteSpace: "pre-line",  color: "#25313C", marginLeft:"12px", fontSize: "12px",width:"252px",height:"60px"}}>{props.des}</p>
            <div style={{display:"flex", }}>
            <div style={{backgroundImage:`url(${props.avatar})`,width:"30px",height:"30px",backgroundSize:"contain",backgroundRepeat:"no-repeat",marginTop:"18px", marginLeft:"12px"}}></div>
            <p style={{color: "#6D7D8B", fontSize: "12px", marginTop:"25.2px", marginLeft:"12px",width:"82.2px"}}>{props.name}</p>
            <p style={{color: "#BBC8D4", fontSize: "12px", marginTop:"25.2px", marginLeft:"6px"}}>{props.text}</p>
            <p style={{color: "#6D7D8B", fontSize: "12px", marginTop:"25.2px", marginLeft:"6px"}}>{props.date}</p>
            </div>
        </div>
    )
}