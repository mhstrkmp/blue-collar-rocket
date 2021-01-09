import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import Button from "./Button";
import { Image, Transformation } from "cloudinary-react";

const CardImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  object-fit: cover;
`;

const CardDescription = styled.article`
  color: var(--neutral-dark-N700);
  margin: 1em 0 1.2em 0;
`;

const CardServices = styled.article`
  margin: 1em 0;
  h3 {
    margin: 0;
    text-align: center;
  }
  ul {
    margin: 0;
    letter-spacing: normal;
  }
`;

const CardPrice = styled.aside`
  font-weight: bold;
  padding: 1em 0;
`;

const CardExtraLarge = ({
  title,
  imgSrc,
  description,
  service,
  price,
  itemId,
}) => {
  const handleOnClick = (key, value) => {
    localStorage.setItem(key, JSON.stringify({ ...value }));
  };

  return (
    <>
      <h2>{title}</h2>
      <CardImage>
        <CardImage>
          <Image cloud_name="mhstrkmp" publicId={imgSrc}>
            <Transformation height="230" crop="limit" />
            <Transformation defaultImage="default.png" />
          </Image>
        </CardImage>
      </CardImage>
      <CardDescription>{description}</CardDescription>
      <CardServices>
        <h3>Leistungsumfang:</h3>
        <ul>
          {service ? (
            service.map((item) => <li key={item}>{item}</li>)
          ) : (
            <>Can't load data</>
          )}
        </ul>
      </CardServices>
      <CardPrice>Preis: € {price.toFixed(2)}</CardPrice>
      <Link to="/customers">
        <Button
          onClick={() => {
            handleOnClick("blueCollarRocketCart", {
              userId: 1,
              name: title,
              itemId,
              price,
              imgSrc,
              done: false,
            });
          }}
        >
          Hinzufügen
        </Button>
      </Link>
    </>
  );
};

CardExtraLarge.propTypes = {
  title: PropTypes.string,
  itemId: PropTypes.number,
  imgSrc: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  service: PropTypes.array,
  product: PropTypes.array,
};

export default CardExtraLarge;
