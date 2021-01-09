import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { Image, Transformation } from "cloudinary-react";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 340px;
  background: none;
  margin: 1.5em 0;
  border-bottom: 1px solid var(--neutral-mid-N60);
  :last-child {
    padding-right: 0.2em;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

const CardSmall = ({ cardTitle, cardText, imgSrc }) => {
  return (
    <Wrapper>
      <TextContainer>
        <h2>{cardTitle}</h2>
        {cardText && cardText.map((item) => <p key={item}>{item}</p>)}
      </TextContainer>
      <Image cloud_name="mhstrkmp" publicId={imgSrc}>
        <Transformation height="50" crop="limit" />
      </Image>
    </Wrapper>
  );
};

CardSmall.propTypes = {
  cardTitle: PropTypes.string,
  imgSrc: PropTypes.string,
  cardText: PropTypes.array,
};

export default CardSmall;
