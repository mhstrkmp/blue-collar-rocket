import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import Searchbar from "../../components/Searchbar";
import { ContentWrapper } from "../../components/Wrapper";
import CardSmall from "../../components/CardSmall";
import NavbarBottom from "../../components/NavbarBottom";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getLocalStorageCart } from "../../utils/utils";
import Fuse from "fuse.js";

const handleOnClick = (cartId, customer) => {
  let cart = getLocalStorageCart(cartId);
  cart = { ...cart, ...customer };
  localStorage.setItem(cartId, JSON.stringify(cart));
};

export const CustomersOverviewPage = ({ title }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isLoading, error, data } = useQuery("customersData", () =>
    fetch(`/api/customers`).then((res) => res.json())
  );

  if (isLoading) return "Loading";
  if (error) return "An error has occurred: " + error.message;

  const fuse = new Fuse(data, {
    keys: ["name"],
  });

  const results = searchQuery ? fuse.search(searchQuery) : data;

  return (
    <>
      <Header title={title} />
      <ContentWrapper>
        <Searchbar
          type="text"
          placeholder={"Suche ..."}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        {results ? (
          results.map((item) => (
            <Link
              key={`link_${item._id}`}
              to="/checkout"
              onClick={() => {
                handleOnClick("blueCollarRocketCart", {
                  customer: { ...item },
                });
              }}
            >
              <CardSmall
                cardTitle={item.name}
                cardText={[item.address.street, item.address.city]}
              />
            </Link>
          ))
        ) : (
          <>Can't load data</>
        )}
        <a href="/storybook" target="_blank">
          Go to Storybook
        </a>
      </ContentWrapper>
      <NavbarBottom />
    </>
  );
};

CustomersOverviewPage.propTypes = {
  title: PropTypes.string,
  customers: PropTypes.array,
};
