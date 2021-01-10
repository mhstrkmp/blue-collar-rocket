import React from "react";
import styled from "styled-components/macro";
import { ContentWrapper } from "./Wrapper";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
`;

export const LoadingSpinner = () => {
  return (
    <ContentWrapper>
      <Container>
        <p>
          <i className="fas fa-spinner fa-spin"></i> Loading ...
        </p>
      </Container>
    </ContentWrapper>
  );
};
