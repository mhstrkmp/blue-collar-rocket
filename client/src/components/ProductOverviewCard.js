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
  color: var(--neutral-dark-N900);
  border-radius: 6px;
  filter: drop-shadow(2px 2px 2px var(--primary-first));
`;

const Headline = styled.h2`
  color: var(--neutral-dark-N900);
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

const ProductOverviewCard = ({ headline, imgSrc, description, price }) => {
  return (
    <Container>
      <Headline>{headline}</Headline>
      <CardImage>
        <img src={imgSrc} alt={headline} />
      </CardImage>
      <CardDescription>{description}</CardDescription>
      <CardPrice>€ {price}</CardPrice>
    </Container>
  );
};

ProductOverviewCard.propTypes = {
  headline: PropTypes.string,
  imgSrc: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default ProductOverviewCard;
