import React from "react";
import { useQuery } from "react-query";
import { Bar } from "react-chartjs-2";
import styled from "styled-components/macro";
import { convertIsoDateToLocale } from "../utils/utils";
import axios from "axios";

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
    </>
  );
};

export default Chart;
