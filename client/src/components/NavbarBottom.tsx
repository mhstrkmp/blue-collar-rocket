import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { Link, useLocation } from "react-router-dom";

const Container = styled.div`
  /* Styling here */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const NavLink = styled(Link)`
  /* Styling here */
`;

export const NavbarBottom = () => {
  const location = useLocation();
  useEffect(() => {}, [location]);

  return (
    <Container>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/product-overview"}>Products Overview</NavLink>
      <NavLink to={"/product-detail"}>Product Detail</NavLink>
      <NavLink to={"/customer-overview"}>Customers</NavLink>
      <NavLink to={"/checkout"}>Checkout</NavLink>
      <NavLink to={"/order-confirmation"}>Order Confirmation</NavLink>
      <NavLink to={"/loading"}>Loading</NavLink>
      <NavLink to={"/storybook"}>Go to Storybook</NavLink>
    </Container>
  );
};
