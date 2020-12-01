import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { Link, LinkProps, useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

type NavLinkProps = { active: boolean } & LinkProps;
const NavLink = styled(({ active, ...other }) => (
  <Link {...other} />
))<NavLinkProps>`
  text-decoration: none;
  color: ${(props) =>
    props.active ? "var(--neutral-dark-N900)" : "var(--neutral-mid-N200)"};
`;

export const NavbarBottom = () => {
  const location = useLocation();
  useEffect(() => {}, [location]);

  return (
    <Container>
      <NavLink to={"/"} active={location.pathname === "/"}>
        Home
      </NavLink>
      <NavLink
        to={"/product-overview"}
        active={location.pathname === "/product-overview"}
      >
        Products Overview
      </NavLink>
      <NavLink
        to={"/product-detail"}
        active={location.pathname === "/product-detail"}
      >
        Product Detail
      </NavLink>
      <NavLink
        to={"/customer-overview"}
        active={location.pathname === "/customer-overview"}
      >
        Customers
      </NavLink>
      <NavLink to={"/checkout"} active={location.pathname === "/checkout"}>
        Checkout
      </NavLink>
      <NavLink
        to={"/order-confirmation"}
        active={location.pathname === "/order-confirmation"}
      >
        Order Confirmation
      </NavLink>
      <NavLink to={"/loading"} active={location.pathname === "/loading"}>
        Loading
      </NavLink>
      <NavLink to={"/storybook"} active={location.pathname === "/storybook"}>
        Go To Storybook
      </NavLink>
    </Container>
  );
};
