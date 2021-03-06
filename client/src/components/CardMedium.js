import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { Image, Transformation } from "cloudinary-react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: none;
  margin-bottom: 1em;
`;

const CardImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1em;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardMedium = ({ title, imgSrc, quantity, price }) => {
  return (
    <Container>
      <DescriptionContainer>
        <h2>{title}</h2>
        <DetailsContainer>
          <p>€ {price.toFixed(2)}</p>
          <p>x {quantity}</p>
        </DetailsContainer>
      </DescriptionContainer>
      <CardImage>
        <Image cloud_name="mhstrkmp" publicId={imgSrc}>
          <Transformation width="100" height="100" crop="limit" />
          <Transformation defaultImage="default.png" />
        </Image>
      </CardImage>
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
