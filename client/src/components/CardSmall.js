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

const CardSmall = ({ title, description }) => {
  return (
    <Container>
      <h2>{title}</h2>
      {description.map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </Container>
  );
};

CardSmall.propTypes = {
  title: PropTypes.string,
  description: PropTypes.array,
};

export default CardSmall;
