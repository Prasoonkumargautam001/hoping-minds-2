import React from "react";
import "./Tours.css";
import Tour1 from "../../assets/tour-1.jpeg";
import Tour2 from "../../assets/tour-2.jpeg";
import Tour3 from "../../assets/tour-3.jpeg";
import Tour4 from "../../assets/tour-4.jpeg";
import Tour5 from "../../assets/tour-5.jpeg";
import Tour6 from "../../assets/tour-6.jpeg";
import TourCard from "./TourCard";
const tourList = [
  {
    img: Tour1,
    place: "China",
    days: "6",
    price: "2100",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    title: "Tibet Adventure",
    timeline: "August 26th, 2020",
  },
  {
    img: Tour2,
    place: "China",
    days: "6",
    price: "2100",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    title: "Tibet Adventure",
    timeline: "August 26th, 2020",
  },
  {
    img: Tour3,
    place: "China",
    days: "6",
    price: "2100",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    title: "Tibet Adventure",
    timeline: "August 26th, 2020",
  },
  {
    img: Tour4,
    place: "China",
    days: "6",
    price: "2100",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    title: "Tibet Adventure",
    timeline: "August 26th, 2020",
  },
  {
    img: Tour5,
    place: "China",
    days: "6",
    price: "2100",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    title: "Tibet Adventure",
    timeline: "August 26th, 2020",
  },
  {
    img: Tour6,
    place: "China",
    days: "6",
    price: "2100",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    title: "Tibet Adventure",
    timeline: "August 26th, 2020",
  },
];
const Tours = () => {
  return (
    <div className="tours-section" id="tour">
      <div className="wrapper">
        <h1 className="heading">
          Featured <span>Tours</span>
        </h1>
        <div className="tours-list">
          {tourList.map((tours, i) => (
            <TourCard
              key={i}
              img={tours.img}
              timeline={tours.timeline}
              title={tours.title}
              desc={tours.desc}
              place={tours.place}
              days={tours.days}
              price={tours.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;
