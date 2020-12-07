import React from "react";
import Header from "../../components/Header";
import NavbarBottom from "../../components/NavbarBottom";
import PropTypes from "prop-types";

export const CategoriesPage = ({ title }) => (
  <>
    <Header title={title} />
    <NavbarBottom />
    <a href="/storybook" target="_blank">
      Go to Storybook
    </a>
  </>
);

CategoriesPage.propTypes = {
  title: PropTypes.string,
};
