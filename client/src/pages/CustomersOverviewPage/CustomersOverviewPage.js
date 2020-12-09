import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import { ContentWrapper } from "../../components/Wrapper";
import CardSmall from "../../components/CardSmall";
import NavbarBottom from "../../components/NavbarBottom";

export const CustomersOverviewPage = ({ title, customers }) => (
  <>
    <Header title={title} />
    <ContentWrapper>
      {customers &&
        customers.map((item) => (
          <CardSmall
            key={item.id}
            cardTitle={item.name}
            cardText={item.adress}
          />
        ))}
    </ContentWrapper>
    <a href="/storybook" target="_blank">
      Go to Storybook
    </a>
    <NavbarBottom />
  </>
);

CustomersOverviewPage.propTypes = {
  title: PropTypes.string,
  customers: PropTypes.array,
};
