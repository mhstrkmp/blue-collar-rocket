import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import NavbarBottom from "../../components/NavbarBottom";
import { AppWrapper, ContentWrapper } from "../../components/Wrapper";

export const ProfilePage = ({ title }) => {
  return (
    <>
      <AppWrapper>
        <Header title={title} />
        <ContentWrapper>
          <div>
            <h2>Profile Page is coming soon ...</h2>
          </div>
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
