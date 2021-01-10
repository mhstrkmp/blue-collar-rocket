import styled from "styled-components/macro";

export const AppWrapper = styled.section`
  display: flex;
  min-height: 100vh;
  margin: 0;
  flex-direction: column;
  background-color: var(--neutral-light-N10);
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1em 2em;
`;
