import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import { ContentWrapper } from "../../components/Wrapper";
import CardSmall from "../../components/CardSmall";
import NavbarBottom from "../../components/NavbarBottom";

export const CategoriesPage = ({ title, categories }) => (
  <>
    <Header title={title} />
    <ContentWrapper>
      {categories &&
        categories.map((item) => (
          <CardSmall
            key={item.id}
            cardTitle={item.category}
            cardText={item.description}
          />
        ))}
    </ContentWrapper>
    <a href="/storybook" target="_blank">
      Go to Storybook
    </a>
    <NavbarBottom />
  </>
);

CategoriesPage.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.array,
};
