// Cards.js
import React from "react";
import Card from "./Card";
import { cardData } from "./FinalData";

const Cards = () => {
  return (
    <div>
      {cardData.map((data, i) => (
        <Card
          key={i}
          image={data.img}
          place={data.place}
          description={data.description}
        />
      ))}
    </div>
  );
};

export default Cards;
