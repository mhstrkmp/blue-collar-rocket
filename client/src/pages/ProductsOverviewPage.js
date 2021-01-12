import React, { useState } from "react";
import PropTypes from "prop-types";
import { LoadingSpinner } from "../components/LoadingSpinner";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import { ContentWrapper } from "../components/Wrapper";
import NavbarBottom from "../components/NavbarBottom";
import CardLarge from "../components/CardLarge";
import { useQuery } from "react-query";
import { Link, useLocation } from "react-router-dom";
import Fuse from "fuse.js";

export const ProductsOverviewPage = ({ title }) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const { isLoading, error, data } = useQuery(
    ["products", location.pathname],
    () => fetch(`/api${location.pathname}`).then((res) => res.json())
  );
  if (isLoading) {
    return <LoadingSpinner title={title} />;
  }
  if (error) return "An error has occurred: " + error.message;

  const fuse = new Fuse(data, {
    keys: ["name"],
  });

  const results = searchQuery ? fuse.search(searchQuery) : data;

  return (
    <>
      <Header title={title} />
      <Searchbar
        type="text"
        placeholder={"Suche ..."}
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <ContentWrapper wrapContent>
        {results ? (
          results.map((item) => (
            <Link key={`link_${item._id}`} to={`/item/${item._id}`}>
              <CardLarge
                key={`card_${item._id}`}
                cardTitle={item.name}
                imgSrc={item.imgCloudinaryId}
                cardText={item.description}
                price={item.price}
              />
            </Link>
          ))
        ) : (
          <>Can't load data</>
        )}
      </ContentWrapper>
      <a href="/storybook" target="_blank">
        Go to Storybook
      </a>
      <NavbarBottom />
    </>
  );
};

ProductsOverviewPage.propTypes = {
  title: PropTypes.string,
  api: PropTypes.string,
  products: PropTypes.array,
};
