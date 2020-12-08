import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { ReactComponent as IconHome } from "../assets/home.svg";
import { ReactComponent as IconSearch } from "../assets/find_in_page.svg";
import { ReactComponent as IconCart } from "../assets/shopping_cart.svg";
import { ReactComponent as IconProfile } from "../assets/profile.svg";

const Container = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 3rem;
  width: 100%;
  background: var(--primary-first);
  border: none;
`;

const StyledNavLink = styled(NavLink)`
  fill: var(--neutral-mid-N60);
  text-decoration: none;
`;

const activeNavLink = {
  fill: `var(--primary-third)`,
};

const NavbarBottom = () => {
  return (
    <Container>
      <StyledNavLink to="/" activeStyle={activeNavLink} exact={true}>
        <IconHome />
      </StyledNavLink>
      <StyledNavLink to="/product-overview" activeStyle={activeNavLink}>
        <IconSearch />
      </StyledNavLink>
      <StyledNavLink to="/checkout" activeStyle={activeNavLink}>
        <IconCart />
      </StyledNavLink>
      <StyledNavLink to="/profile" activeStyle={activeNavLink}>
        <IconProfile />
      </StyledNavLink>
    </Container>
  );
};

export default NavbarBottom;
