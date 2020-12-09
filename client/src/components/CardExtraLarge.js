import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const CardImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  object-fit: cover;
  width: 240px;
  height: 240px;
`;

const CardDescription = styled.article`
  color: var(--neutral-dark-N700);
  padding: 1em 2em;
`;

const CardPrice = styled.aside`
  font-weight: bold;
  padding: 1em 0;
`;

const CardExtraLarge = ({ title, imgSrc, description, service, price }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <CardImage>
        <img src={imgSrc} alt={title} />
      </CardImage>
      <CardDescription>{description}</CardDescription>
      <article>
        <h3>Leistungsumfang:</h3>
        <ul>
          {[service].map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </article>
      <CardPrice>Preis: € {price}</CardPrice>
      <Button>Hinzufügen</Button>
    </Container>
  );
};

CardExtraLarge.propTypes = {
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  service: PropTypes.array,
  product: PropTypes.array,
};

export default CardExtraLarge;
