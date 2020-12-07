import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 150px;
  width: 340px;
  background: none;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  padding: 1em 1.5em;
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  object-fit: cover;
  width: 100px;
  height: 100px;
  border-radius: 6px;
`;

const CardMedium = ({ title, imgSrc, quantity, price }) => {
  return (
    <Container>
      <CardImage>
        <img src={imgSrc} alt={title} />
      </CardImage>
      <DescriptionContainer>
        <h2>{title}</h2>
        <DetailsContainer>
          <p>€ {price}</p>
          <p>x {quantity}</p>
        </DetailsContainer>
      </DescriptionContainer>
    </Container>
  );
};

CardMedium.propTypes = {
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default CardMedium;
