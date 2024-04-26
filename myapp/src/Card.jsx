// Card.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
  background-color: #a7a7a7;
  max-width: 500px;
`;
const ImageContainer = styled.div`
  img {
    width: 100%;
    border-radius: 20px;
  }
`;
const Description = styled.div`
  padding: 20px 0;
  overflow: hidden;
  span {
    margin: 10px;
    color: #1028dc;
    border-radius: 7px;
    padding: 3px;
    cursor: pointer;
  }
`;

const Card = ({ image, place, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container>
      <ImageContainer>
        <img src={image} alt={place} />
        <p>{place}</p>
      </ImageContainer>
      <Description>
        <p>
          {isExpanded ? description : `${description.substring(0, 100)}...`}
          <span onClick={handleReadMore}>
            {isExpanded ? "Read Less" : "Read More"}
          </span>
        </p>
      </Description>
    </Container>
  );
};



export default Card;
