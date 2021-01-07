import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import NavbarBottom from "../../components/NavbarBottom";
import Chart from "../../components/Chart";
import { AppWrapper, ContentWrapper } from "../../components/Wrapper";

export const ProfilePage = ({ title }) => {
  return (
    <>
      <AppWrapper>
        <Header title={title} />
        <ContentWrapper>
          <Chart />
          <a href="/storybook" target="_blank">
            Go to Storybook
          </a>
        </ContentWrapper>
        <NavbarBottom />
      </AppWrapper>
    </>
  );
};

ProfilePage.propTypes = {
  title: PropTypes.string,
};
