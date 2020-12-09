import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Container = styled.div`
  border-bottom: 1px solid var(--neutral-mid-N60);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 340px;
  background: none;
  margin-bottom: 1.5em;
`;

const CardSmall = ({ cardTitle, cardText }) => {
  return (
    <Container>
      <h2>{cardTitle}</h2>
      {cardText.map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </Container>
  );
};

CardSmall.propTypes = {
  cardTitle: PropTypes.string,
  cardText: PropTypes.array,
};

export default CardSmall;
