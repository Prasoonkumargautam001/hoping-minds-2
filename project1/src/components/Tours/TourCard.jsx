import React from 'react'
import "./TourCard.css"
import { FaMap } from "react-icons/fa6";
const TourCard = (props) => {
    const {img, timeline, title, desc, place, days, price} = props
  return (
    <div>
        <div className="tour-card">
            <div className="tour-img-box">
                <img src={img} alt="" />
                <div className="tour-timeline">
                  {timeline}
                </div>
            </div>
            <div className="tour-desc">
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="bottom-bar">
                    <div className="place"> <FaMap/>{place}</div>
                    <div className="days">{days} days</div>
                    <div className="price">From ${price}</div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default TourCard
