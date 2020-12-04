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
  color: var(--neutral-dark-N900);
`;

const DescriptionContainer = styled.div`
  /* Styling here */
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  padding: 1em 1.5em;
`;

const DetailsContainer = styled.div`
  /* Styling here */
  display: flex;
  justify-content: space-between;
`;

const Headline = styled.h2`
  color: var(--neutral-dark-N900);
  margin: 0;
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

const CardPrice = styled.aside`
  color: var(--neutral-dark-N900);
  font-weight: bold;
`;

const CardQuantity = styled.aside`
  color: var(--neutral-dark-N900);
  font-weight: bold;
`;

const CardSmallProduct = ({ headline, imgSrc, quantity, price }) => {
  return (
    <Container>
      <CardImage>
        <img src={imgSrc} alt={headline} />
      </CardImage>
      <DescriptionContainer>
        <Headline>{headline}</Headline>
        <DetailsContainer>
          <CardPrice>€ {price}</CardPrice>
          <CardQuantity>x {quantity}</CardQuantity>
        </DetailsContainer>
      </DescriptionContainer>
    </Container>
  );
};

CardSmallProduct.propTypes = {
  headline: PropTypes.string,
  imgSrc: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default CardSmallProduct;
