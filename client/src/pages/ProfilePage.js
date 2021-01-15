import React, { useEffect, useState } from "react";
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

const userBonusPercentage = 0.03;
const chosenYear = new Date().getFullYear();
const bonusSum = Array.from({ length: 12 }, () => 0);

export const ProfilePage = ({ title }) => {
  const [bonusPerMonth, setBonusPerMonth] = useState([]);
  const { isLoading, error, data } = useQuery("orders", async () => {
    try {
      const { data } = await axios.get("/api/orders");
      return data;
    } catch (err) {
      console.error(err);
      return err;
    }
  });

  useEffect(() => {
    data &&
      data.forEach((order) => {
        const date = new Date(order.dateAdded);
        const year = date.getFullYear();
        if (year !== chosenYear) {
          return;
        }
        const month = date.getMonth();
        const bonus = order.price * userBonusPercentage;
        bonusSum[month] += bonus;
      });
    setBonusPerMonth(bonusSum);
  }, [data]);

  if (isLoading) {
    return <LoadingSpinner title={title} />;
  }
  if (error) return "An error has occurred: " + error.message;

  data.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
  return (
    <>
      <Header title={title} />
      <ContentWrapper>
        <h2>Deine Boni {chosenYear}</h2>
        <Chart bonusPerMonth={bonusPerMonth} />
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
