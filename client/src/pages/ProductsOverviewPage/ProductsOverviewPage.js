import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import NavbarBottom from "../../components/NavbarBottom";

export const ProductsOverviewPage = ({ title }) => {
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

ProductsOverviewPage.propTypes = {
  title: PropTypes.string,
};
