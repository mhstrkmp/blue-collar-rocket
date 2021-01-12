import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { ReactComponent as IconHome } from "../assets/home.svg";
import { ReactComponent as IconSearch } from "../assets/find_in_page.svg";
import { ReactComponent as IconCart } from "../assets/shopping_cart.svg";
import { ReactComponent as IconProfile } from "../assets/profile.svg";

const NavbarContainer = styled.footer`
  z-index: 100;
  position: sticky;
  bottom: 0;
  background: var(--primary-first);
  border: none;
  filter: drop-shadow(1px 1px 1px var(--primary-second));
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 3rem;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
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
    <NavbarContainer>
      <LinkContainer>
        <StyledNavLink to="/" activeStyle={activeNavLink} exact={true}>
          <IconHome />
        </StyledNavLink>
        <StyledNavLink to="/items" activeStyle={activeNavLink}>
          <IconSearch />
        </StyledNavLink>
        <StyledNavLink to="/checkout" activeStyle={activeNavLink}>
          <IconCart />
        </StyledNavLink>
        <StyledNavLink to="/profile" activeStyle={activeNavLink}>
          <IconProfile />
        </StyledNavLink>
      </LinkContainer>
    </NavbarContainer>
  );
};

export default NavbarBottom;
