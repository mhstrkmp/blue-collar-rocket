import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import axios from "axios";
import { useQuery } from "react-query";
import { convertIsoDateToLocale } from "../utils/utils";
import { LoadingSpinner } from "../components/LoadingSpinner";
import Header from "../components/Header";
import NavbarBottom from "../components/NavbarBottom";
import Chart from "../components/Chart";
import { ContentWrapper } from "../components/Wrapper";

const Table = styled.table`
  width: 100%;
  margin: 2em 0;
  vertical-align: sub;
  th {
    padding-bottom: 0.6em;
  }
  td {
    font-size: 0.95em;
  }
  tr:nth-child(even) {
    font-size: 0.9em;
    color: var(--neutral-mid-N60);
  }
  tr > td:last-child {
    text-align: right;
  }
`;

export const ProfilePage = ({ title }) => {
  const { isLoading, error, data } = useQuery("orders", async () => {
    try {
      const { data } = await axios.get("/api/orders");
      return data;
    } catch (err) {
      console.error(err);
      return err;
    }
  });

  if (isLoading) {
    return <LoadingSpinner title={title} />;
  }
  if (error) return "An error has occurred: " + error.message;

  data.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));

  return (
    <>
      <Header title={title} />
      <ContentWrapper>
        <h2>Deine Bonuszahlungen</h2>
        <Chart />
        <Table>
          <thead>
            <tr>
              <th colSpan="2">Vermittelte Aufträge</th>
            </tr>
          </thead>
          {data.map((item) => (
            <tbody key={`id_${item._id}`}>
              <tr>
                <td> {convertIsoDateToLocale(item.dateAdded)}</td>
                <td>{item.customer.name}</td>
              </tr>
              <tr>
                <td>{item.name}</td>
                <td>€{item.price.toFixed(2)}</td>
              </tr>
            </tbody>
          ))}
        </Table>
        <a href="/storybook" target="_blank">
          Go to Storybook
        </a>
      </ContentWrapper>
      <NavbarBottom />
    </>
  );
};

ProfilePage.propTypes = {
  title: PropTypes.string,
};
