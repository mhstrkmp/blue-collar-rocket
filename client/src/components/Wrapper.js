import styled from "styled-components/macro";

export const AppWrapper = styled.section`
  display: flex;
  min-height: 100vh;
  margin: 0;
  flex-direction: column;
  background-color: var(--neutral-light-N10);
`;

export const ContentWrapper = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1em;
  @media (min-width: 768px) {
    justify-content: center;
    flex-direction: ${(props) => (props.wrapContent ? "row" : "column")};
    flex-wrap: ${(props) => (props.wrapContent ? "wrap" : "nowrap")};
  }
`;
