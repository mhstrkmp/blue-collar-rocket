import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import { ContentWrapper } from "../../components/Wrapper";
import CardExtraLarge from "../../components/CardExtraLarge";
import NavbarBottom from "../../components/NavbarBottom";

export const ProductPage = ({
  title,
  productName,
  imgSrc,
  description,
  service,
  price,
}) => (
  <>
    <Header title={title} />
    <ContentWrapper>
      <CardExtraLarge
        title={productName}
        imgSrc={imgSrc}
        description={description}
        service={service}
        price={price}
      />
    </ContentWrapper>
    <a href="/storybook" target="_blank">
      Go to Storybook
    </a>
    <NavbarBottom />
  </>
);

ProductPage.propTypes = {
  title: PropTypes.string,
  productName: PropTypes.string,
  imgSrc: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  service: PropTypes.array,
  product: PropTypes.array,
};
