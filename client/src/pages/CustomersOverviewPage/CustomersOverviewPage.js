import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import { AppWrapper, ContentWrapper } from "../../components/Wrapper";
import CardSmall from "../../components/CardSmall";
import NavbarBottom from "../../components/NavbarBottom";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getLocalStorageCart } from "../../utils/utils";

const handleOnClick = (cartId, customer) => {
  let cart = getLocalStorageCart(cartId);
  cart = { ...cart, ...customer };
  localStorage.setItem(cartId, JSON.stringify(cart));
};

export const CustomersOverviewPage = ({ title }) => {
  const { isLoading, error, data } = useQuery("customersData", () =>
    fetch(`/api/customers`).then((res) => res.json())
  );

  if (isLoading) return "Loading";
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <AppWrapper>
        <Header title={title} />
        <ContentWrapper>
          {data ? (
            data.map((item) => (
              <>
                <Link
                  onClick={() => {
                    handleOnClick("blueCollarRocketCart", {
                      customer: { ...item },
                    });
                  }}
                  key={`link_${item.id}`}
                  to="/checkout"
                >
                  <CardSmall
                    key={item.id}
                    cardTitle={item.name}
                    cardText={[item.address.street, item.address.city]}
                  />
                </Link>
              </>
            ))
          ) : (
            <>Can't load data</>
          )}
          <a href="/storybook" target="_blank">
            Go to Storybook
          </a>
        </ContentWrapper>
        <NavbarBottom />
      </AppWrapper>
    </>
  );
};

CustomersOverviewPage.propTypes = {
  title: PropTypes.string,
  customers: PropTypes.array,
};
