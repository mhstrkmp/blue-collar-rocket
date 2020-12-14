import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import { ContentWrapper } from "../../components/Wrapper";
import CardSmall from "../../components/CardSmall";
import CardMedium from "../../components/CardMedium";
import Button from "../../components/Button";
import NavbarBottom from "../../components/NavbarBottom";
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

export const CheckoutPage = ({ title }) => {
  const storedObjects = localStorage.getItem("blueCollarRocketCart");
  const cart = JSON.parse(storedObjects);

  return (
    <>
      <Header title={title} />
      <ContentWrapper>
        <h2>Kundendaten:</h2>
        {cart ? (
          <>
            <CardSmall
              cardTitle={cart.customer.name}
              cardText={[
                cart.customer.address.street,
                cart.customer.address.city,
              ]}
            />
            <CardMedium
              title={cart.item.name}
              imgSrc={cart.item.imgUrl}
              price={cart.item.price}
              quantity={1}
            />
            <Button
              onClick={() => {
                sendPostRequest(cart);
              }}
            >
              Hinzufügen
            </Button>
          </>
        ) : (
          <>Can't load cart data</>
        )}
      </ContentWrapper>
      <a href="/storybook" target="_blank">
        Go to Storybook
      </a>
      <NavbarBottom />
    </>
  );
};

CheckoutPage.propTypes = {
  title: PropTypes.string,
};
