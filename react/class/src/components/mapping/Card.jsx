import React from "react";
import "./Card.css";
import data from "./cardData.json"; 

const Card = () => {
  return (
    <div className="card-container">
      {data.map((item) => (
        <div key={item.id} className="card">
          <h2>{item.heading}</h2>
          <p>{item.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;



// import React from "react";

// const Card = ({ heading, paragraph }) => {
//   return (
//     <div style={styles.card}>
//       <h2>{heading}</h2>
//       <p>{paragraph}</p>
//     </div>
//   ); 
// };
