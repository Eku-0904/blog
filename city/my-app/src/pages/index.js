// import { useState } from "react";
// const citiesList = [
//   { id: 1, city: "Istanbul", isVisited: false },
//   { id: 2, city: "Venice", isVisited: true },
//   { id: 3, city: "Ulaanbaatar", isVisited: false },
//   { id: 4, city: "Pyongnyang", isVisited: true },
//   { id: 5, city: "Bangkok", isVisited: false },
//   { id: 6, city: "Rio de Janeiro", isVisited: false },
//   { id: 7, city: "Athens", isVisited: false },
// ];
// export default function Filter() {
//   const [cities, setCities] = useState(citiesList);
//   function deleteOne() {
    
//     //Filter ashiglaad delete-g ajilluulah, parameter-r zuv utga orj ireh yostoi
//     console.log("deleted");
//   }
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         width: "800px",
//         margin: "auto",
//         gap: "10px",
//       }}
//     >
//       {cities.map((city) => (
//         <CityComponent
//           removeOne={deleteOne}
//           cityName={city.city}
//           isVisited={city.isVisited}
//         />
//       ))}
//     </div>
//   );
// }
// function CityComponent({ cityName, isVisited, removeOne }) {
//   return (
//     <div
//       style={{
//         width: "300px",
//         border: "2px solid gray",
//         borderRadius: "20px",
//         padding: "20px",
//       }}
//     >
//       <h1>{cityName}</h1>
//       {isVisited ? <p>Status: Visited</p> : <p>Status: Not visited</p>}
//       <button onClick={() => removeOne()}>Delete</button>
//     </div>
//   );
// }
import { useState } from "react";
const citiesList = [
  { id: 1, city: "Istanbul", isVisited: false },
  { id: 2, city: "Venice", isVisited: true },
  { id: 3, city: "Ulaanbaatar", isVisited: false },
  { id: 4, city: "Pyongnyang", isVisited: true },
  { id: 5, city: "Bangkok", isVisited: false },
  { id: 6, city: "Rio de Janeiro", isVisited: false },
  { id: 7, city: "Athens", isVisited: false },
  { id: 8, city: "Venice", isVisited: true },
];
export default function Filter() {
  const [cities, setCities] = useState(citiesList);
  function deleteOne(idToDelete) {
    //Filter ashiglaad delete-g ajilluulah, parameter-r zuv utga orj ireh yostoi
    const newCities = cities.filter((element) => element.id !== idToDelete);
    setCities(newCities);
  }
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "800px",
        margin: "auto",
        gap: "10px",
      }}
    >
      {cities.map((city) => (
        <CityComponent
          id={city.id}
          removeOne={deleteOne}
          cityName={city.city}
          isVisited={city.isVisited}
        />
      ))}
    </div>
  );
}
function CityComponent({ cityName, isVisited, removeOne, id }) {
  return (
    <div
      style={{
        width: "300px",
        border: "2px solid gray",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <h1>{cityName}</h1>
      {isVisited ? <p>Status: Visited</p> : <p>Status: Not visited</p>}
      <button onClick={() => removeOne(id)}>Delete</button>
    </div>
  );
}