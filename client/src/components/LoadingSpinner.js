import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { ContentWrapper } from "./Wrapper";
import Header from "./Header";
import NavbarBottom from "./NavbarBottom";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
`;

export const LoadingSpinner = ({ title }) => {
  return (
    <>
      <Header title={title} />
      <ContentWrapper>
        <Container>
          <p>
            <i className="fas fa-spinner fa-spin"></i> Loading ...
          </p>
        </Container>
      </ContentWrapper>
      <NavbarBottom />
    </>
  );
};

LoadingSpinner.propTypes = {
  title: PropTypes.string,
};
