import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import NavbarBottom from "../../components/NavbarBottom";

export const CheckoutPage = ({ title }) => {
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

CheckoutPage.propTypes = {
  title: PropTypes.string,
};
