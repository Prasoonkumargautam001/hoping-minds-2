import React from 'react'
import "./ServiceCard.css"
const ServiceCard = (props,) => {
    const {icon, title, desc}= props
  return (
    <div className='service-card'>
        <div className="service-icon">
            {icon}
        </div>
      <div className="service-desc">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>

    </div>
  )
}

export default ServiceCard
