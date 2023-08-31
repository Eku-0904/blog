// export function Box() {
//     return(
//         <div style={{
//           width: "200px",
//           height: "200px",
//           backgroundColor: "#CFB997",
//           color: "#fff",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           fontSize: "100px",
//           borderRadius: "20px",
//           border: "3px solid black"
//         }}>
// ☾
//         </div>
//       )
// }







// export function ImgBox() {
//     return(
//         <div style={{
//           display: "flex",
//           justifyContent: "space-between",
//           marginBottom: "50px",
//           marginTop: "200px",
//         }}>
//         <img style={{
//             width: "300px",
//             height: "200px",
//         }} src="https://d15lrsitp7y7u.cloudfront.net/wp-content/uploads/2020/02/air-jordan-1-dunk-sole-pe-1986-lateral-e1646837291193.jpeg"></img>
//          <img style={{
//             width: "300px",
//             height: "200px",
//         }} src="https://d15lrsitp7y7u.cloudfront.net/wp-content/uploads/2020/02/air-jordan-1-dunk-sole-pe-1986-lateral-e1646837291193.jpeg"></img>
      
//       <img style={{
//             width: "300px",
//             height: "200px",
//         }} src="https://d15lrsitp7y7u.cloudfront.net/wp-content/uploads/2020/02/air-jordan-1-dunk-sole-pe-1986-lateral-e1646837291193.jpeg"></img>
//         </div>
//       )
// }







export function CityBox(props){
    return(
        <div style={{backgroundImage:`url(${props.image})`,width:"530px",height:"530px",backgroundSize:"cover",border:"1px solid black",borderRadius:"20px"}}>
            <h1 className="box" style={{color: "#2F3C7E", marginLeft:"20px", fontSize: "40px",}}>{props.city}</h1>
        </div>
    )
}