import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 340px;
  background: var(--primary-third);
  border-radius: 6px;
  margin: 1rem;
  padding: 1em 0;
  filter: drop-shadow(2px 2px 2px var(--primary-first));
`;

const CardImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  object-fit: cover;
  width: 150px;
  height: 150px;
`;

const CardDescription = styled.article`
  color: var(--neutral-dark-N700);
  padding: 1em 2em;
`;

const CardPrice = styled.aside`
  color: var(--neutral-dark-N900);
  font-weight: bold;
  padding: 1em 2em;
`;

const CardLarge = ({ cardTitle, imgSrc, cardText, price }) => {
  return (
    <Container>
      <h2>{cardTitle}</h2>
      <CardImage>
        <img src={imgSrc} alt={cardTitle} />
      </CardImage>
      <CardDescription>{cardText}</CardDescription>
      <CardPrice>Preis: € {price}</CardPrice>
    </Container>
  );
};

CardLarge.propTypes = {
  cardTitle: PropTypes.string,
  imgSrc: PropTypes.string,
  cardText: PropTypes.string,
  price: PropTypes.number,
};

export default CardLarge;
