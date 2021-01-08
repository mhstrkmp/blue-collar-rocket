import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import axios from "axios";
import { useQuery } from "react-query";
import { convertIsoDateToLocale } from "../../utils/utils";
import Header from "../../components/Header";
import NavbarBottom from "../../components/NavbarBottom";
import Chart from "../../components/Chart";
import { AppWrapper, ContentWrapper } from "../../components/Wrapper";

const Table = styled.table`
  margin: 1.8em 0;
  font-size: 0.8em;
  th {
    padding-bottom: 0.6em;
  }
  td {
    padding-bottom: 0.3em;
  }
  td:not(:last-child) {
    padding-right: 0.5em;
  }
`;

export const ProfilePage = ({ title }) => {
  const { isLoading, error, data } = useQuery("orders", async () => {
    try {
      const { data } = await axios.get("/api/orders");
      return data;
    } catch (err) {
      // Error handling
      console.error(err);
      return err;
    }
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  // Playground
  const monthToIndex = (date) => {
    return new Date(date).getMonth();
  };

  const cummulatedBonuses = [];

  const getOrderMonth = data.map((order) =>
    // bla
    // blub
    monthToIndex(order.dateAdded)
  );

  console.log(getOrderMonth);

  // Playground

  return (
    <>
      <AppWrapper>
        <Header title={title} />
        <ContentWrapper>
          <h2>Deine Bonuszahlungen</h2>
          <Chart />
          <Table>
            <thead>
              <tr>
                <th colSpan="4">Vermittelte Aufträge</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={`id_${item._id}`}>
                  <td>{convertIsoDateToLocale(item.dateAdded)}</td>
                  <td>{item.customer.name}</td>
                  <td>{item.name}</td>
                  <td>€{item.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <a href="/storybook" target="_blank">
            Go to Storybook
          </a>
        </ContentWrapper>
        <NavbarBottom />
      </AppWrapper>
    </>
  );
};

ProfilePage.propTypes = {
  title: PropTypes.string,
};
