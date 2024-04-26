import React from "react";
import "./Service.css";
import { FaWallet } from "react-icons/fa";
import { FaTree } from "react-icons/fa6";
import { FaSocks } from "react-icons/fa";
import ServiceCard from "./ServiceCard";
const serviceList = [
  {
    icon: <FaWallet />,
    title: "Save Money",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    icon: <FaTree />,
    title: "Endless Hiking",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    icon: <FaSocks />,
    title: "Amazing Comfort",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];
const Service = () => {
  return (
    <div className="service-section" id="service">
      <div className="wrapper">
        <h1 className=" heading">
          Our <span>Services</span>
        </h1>
        <div className="services">
          {serviceList.map((items, i) => (
            <ServiceCard
              key={i}
              desc={items.desc}
              title={items.title}
              icon={items.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
