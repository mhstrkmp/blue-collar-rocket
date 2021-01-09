import styled from "styled-components/macro";

export const AppWrapper = styled.section`
  display: flex;
  min-height: 100vh;
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

// export const CardsWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;

// export const AppWrapper = styled.section`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   overflow: hidden;
//   width: 100%;
//   max-width: 400px;
//   height: 100%;
//   max-height: 812px;
//   background-color: var(--neutral-light-N10);
// `;

// export const ContentWrapper = styled.section`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100%;
//   padding: 1rem 2rem 6.5rem 2rem;
// `;
