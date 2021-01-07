import React from "react";
import { useQuery } from "react-query";
import { Bar } from "react-chartjs-2";
import styled from "styled-components/macro";
import { isoDateConverter } from "../utils/utils";
const axios = require("axios").default;

const chartData = {
  labels: [
    "Jan",
    "Feb",
    "März",
    "April",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Okt",
    "Nov",
    "Dez",
  ],
  datasets: [
    {
      label: "€ Bonus",
      data: [12, 19, 15, 23, 42, 13, 7, 33, 16, 19, 55, 13],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

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

const Chart = () => {
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

  return (
    <>
      <h2>Deine Bonuszahlungen</h2>
      <Bar data={chartData} options={options} />
      <Table>
        <thead>
          <tr>
            <th colSpan="4">Vermittelte Aufträge</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={`tr_${index}`}>
              <td key={`td_date${index}`}>
                {isoDateConverter(item.dateAdded)}
              </td>
              <td key={`td_customer_${index}`}>{item.customer.name}</td>
              <td key={`td_name_${index}`}>{item.name}</td>
              <td key={`td_price${index}`}>€{item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Chart;

//{data.customer.map((item) => console.log(item.userId))}
