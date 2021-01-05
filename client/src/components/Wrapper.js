import styled from "styled-components/macro";

export const AppWrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 812px;
  background-color: var(--neutral-light-N10);
`;

export const ContentWrapper = styled.section`
  overflow: auto;
  width: 98%;
  max-width: 400px;
  height: 100%;
  max-height: 812px;
  margin: 0.5rem auto 0.5rem;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
