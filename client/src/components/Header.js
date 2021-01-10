import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const StyledHeader = styled.header`
  z-index: 100;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 100%;
  background: var(--primary-first);
  border: none;
  filter: drop-shadow(2px 2px 2px var(--neutral-mid-N60));
`;

const Title = styled.h1`
  font-weight: normal;
  font-size: 1.2em;
  text-transform: uppercase;
  padding: 0;
  color: var(--primary-third);
`;

const Header = ({ title }) => (
  <StyledHeader>
    <Title>{title}</Title>
  </StyledHeader>
);

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};
