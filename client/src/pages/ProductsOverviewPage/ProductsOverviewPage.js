import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import { ContentWrapper, CardsWrapper } from "../../components/Wrapper";
import NavbarBottom from "../../components/NavbarBottom";
import CardLarge from "../../components/CardLarge";

export const ProductsOverviewPage = ({ title, products }) => (
  <>
    <Header title={title} />
    <ContentWrapper>
      <CardsWrapper>
        {products &&
          products.map((item) => (
            <CardLarge
              key={item.id}
              cardTitle={item.name}
              imgSrc={item.imgSrc}
              cardText={item.description}
              price={item.price}
            />
          ))}
      </CardsWrapper>
      <a href="/storybook" target="_blank">
        Go to Storybook
      </a>
    </ContentWrapper>
    <NavbarBottom />
  </>
);

ProductsOverviewPage.propTypes = {
  title: PropTypes.string,
  products: PropTypes.array,
};
