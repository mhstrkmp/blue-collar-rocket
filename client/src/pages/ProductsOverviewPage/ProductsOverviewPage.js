import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import {
  AppWrapper,
  ContentWrapper,
  CardsWrapper,
} from "../../components/Wrapper";
import NavbarBottom from "../../components/NavbarBottom";
import CardLarge from "../../components/CardLarge";
import { useQuery } from "react-query";
import { Link, useLocation } from "react-router-dom";

export const ProductsOverviewPage = ({ title }) => {
  const location = useLocation();

  const { isLoading, error, data } = useQuery(
    ["itemsData", location.pathname],
    () => fetch(`/api${location.pathname}`).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <AppWrapper>
        <Header title={title} />
        <ContentWrapper>
          <CardsWrapper>
            {data ? (
              data.map((item) => (
                <Link key={`link_${item._id}`} to={`/item/${item._id}`}>
                  <CardLarge
                    key={`card_${item._id}`}
                    cardTitle={item.name}
                    imgSrc={item._id}
                    cardText={item.description}
                    price={item.price}
                  />
                </Link>
              ))
            ) : (
              <CardsWrapper>Can't load data</CardsWrapper>
            )}
          </CardsWrapper>
          <a href="/storybook" target="_blank">
            Go to Storybook
          </a>
        </ContentWrapper>
        <NavbarBottom />
      </AppWrapper>
    </>
  );
};

ProductsOverviewPage.propTypes = {
  title: PropTypes.string,
  api: PropTypes.string,
  products: PropTypes.array,
};
