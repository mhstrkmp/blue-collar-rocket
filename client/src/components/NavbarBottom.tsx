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
        Suche
      </NavLink>
      <NavLink to={"/checkout"} active={location.pathname === "/checkout"}>
        Warenkorb
      </NavLink>
      <NavLink to={"/profile"} active={location.pathname === "/profile"}>
        Profil
      </NavLink>
    </Container>
  );
};
