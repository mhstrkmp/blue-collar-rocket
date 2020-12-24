import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import { ContentWrapper } from "../../components/Wrapper";
import CardSmall from "../../components/CardSmall";
import NavbarBottom from "../../components/NavbarBottom";
import { useQuery } from "react-query";

export const CategoriesPage = ({ title }) => {
  const { isLoading, error, data } = useQuery("userCategories", () =>
    fetch(`/api/users/5fdb22ca3c243e0a96a8bd1e`).then((res) => res.json())
  );

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Header title={title} />
      <ContentWrapper>
        {data.categories ? (
          data.categories.map((item) => (
            <Link
              key={item.title + "_" + item._id}
              to={`/category/${item.categoryId}`}
            >
              <CardSmall
                key={item.categoryName + "_" + item._id}
                cardTitle={item.categoryName}
                cardText={[item.categoryDescription]}
              />
            </Link>
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

CategoriesPage.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.array,
};
