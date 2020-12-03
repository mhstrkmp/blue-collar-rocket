import React from "react";
import styled from "styled-components/macro";

const Container = styled.header`
  height: 3rem;
  width: 100vw;
  text-align: center;
  text-transform: uppercase;
  color: var(--primary-third);
  background: var(--primary-first);
  border: none;
  filter: drop-shadow(2px 2px 2px var(--primary-first));
`;

const Headline = styled.h1`
  /* Styling here */
  text-align: center;
  text-transform: uppercase;
  color: var(--primary-third);
`;

const Header = (props) => (
  <Container>
    <Headline {...props} />
  </Container>
);

export default Header;
