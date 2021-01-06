import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import { AppWrapper, ContentWrapper } from "../../components/Wrapper";
import CardSmall from "../../components/CardSmall";
import CardMedium from "../../components/CardMedium";
import Button from "../../components/Button";
import NavbarBottom from "../../components/NavbarBottom";
import { useHistory } from "react-router-dom";
import { getLocalStorageCart } from "../../utils/utils";
const axios = require("axios").default;

const sendPostRequest = async (order) => {
  try {
    const res = await axios.post("/api/orders", order);
    console.log(res.data);
  } catch (err) {
    // Error handling
    console.error(err);
  }
};

const deleteLocalStorage = (item) => {
  localStorage.removeItem(item);
};

export const CheckoutPage = ({ title }) => {
  let history = useHistory();
  const cart = getLocalStorageCart("blueCollarRocketCart");

  return (
    <>
      <AppWrapper>
        <Header title={title} />
        <ContentWrapper>
          {cart && cart.customer ? (
            <>
              <CardSmall
                cardTitle={cart.customer.name}
                cardText={[
                  cart.customer.address.street,
                  cart.customer.address.city,
                ]}
              />
              <CardMedium
                title={cart.name}
                imgSrc={cart.imgSrc}
                price={cart.price}
                quantity={1}
              />
              <Button
                onClick={async () => {
                  await sendPostRequest(cart);
                  deleteLocalStorage("blueCollarRocketCart");
                  history.push("/");
                }}
              >
                Bestellen
              </Button>
            </>
          ) : (
            <h2>
              Es sind keine Artikel im Warenkob oder es wurde kein Kunde
              ausgewählt
            </h2>
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

CheckoutPage.propTypes = {
  title: PropTypes.string,
};
