import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 100vw;
  background: var(--primary-first);
  border: none;
  filter: drop-shadow(2px 2px 2px var(--primary-first));
`;

const Title = styled.h1`
  font-weight: normal;
  font-size: 1.5em;
  text-transform: uppercase;
  padding: 0;
  color: var(--primary-third);
`;

const Header = ({ title }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
);

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};
