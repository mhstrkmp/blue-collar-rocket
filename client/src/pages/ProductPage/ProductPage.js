import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import NavbarBottom from "../../components/NavbarBottom";

export const ProductPage = ({ title }) => {
  return (
    <>
      <Header title={title} />
      <NavbarBottom />
      <a href="/storybook" target="_blank">
        Go to Storybook
      </a>
    </>
  );
};

ProductPage.propTypes = {
  title: PropTypes.string,
};
