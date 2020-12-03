import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  height: 3rem;
  width: 100vw;
  text-align: center;
  text-transform: uppercase;
  background: var(--primary-first);
  border: none;
  color: var(--primary-third);
  filter: drop-shadow(2px 2px 2px var(--primary-first));
`;

const ProductOverviewCard = () => {
  return (
    <Container>
      <h1>Home</h1>
    </Container>
  );
};
export default ProductOverviewCard;
