import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import { ContentWrapper } from "../../components/Wrapper";
import CardSmall from "../../components/CardSmall";
import NavbarBottom from "../../components/NavbarBottom";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const handleOnClick = (key, value) => {
  const storedObjects = localStorage.getItem(key);
  const storedObjectsJson = JSON.parse(storedObjects);
  const updateStoredObjects = { ...storedObjectsJson, ...value };
  localStorage.setItem(key, JSON.stringify(updateStoredObjects));
};

export const CustomersOverviewPage = ({ title }) => {
  const { isLoading, error, data } = useQuery("customersData", () =>
    fetch(`/api/customers`).then((res) => res.json())
  );

  if (isLoading) return "Loading";
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
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
      </ContentWrapper>
      <a href="/storybook" target="_blank">
        Go to Storybook
      </a>
      <NavbarBottom />
    </>
  );
};

CustomersOverviewPage.propTypes = {
  title: PropTypes.string,
  customers: PropTypes.array,
};
