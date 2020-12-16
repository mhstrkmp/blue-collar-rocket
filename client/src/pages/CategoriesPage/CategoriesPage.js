import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import { ContentWrapper } from "../../components/Wrapper";
import CardSmall from "../../components/CardSmall";
import NavbarBottom from "../../components/NavbarBottom";
import { useQuery, QueryCache, ReactQueryCacheProvider } from "react-query";

const queryCache = new QueryCache();

export const CategoriesPage = ({ title }) => {
  const { isLoading, error, data } = useQuery("userCategories", () =>
    fetch(`/api/users/1`).then((res) => res.json())
  );

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Header title={title} />
        <ContentWrapper>
          {data.categories &&
            data.categories.map((item) => (
              <Link
                key={item.categoryId + "_" + item.title}
                to={`/category/${item.categoryId}`}
              >
                <CardSmall
                  key={item.id + "_" + item.categoryName}
                  cardTitle={item.categoryName}
                  cardText={[item.categoryDescription]}
                />
              </Link>
            ))}
        </ContentWrapper>
        <a href="/storybook" target="_blank">
          Go to Storybook
        </a>
        <NavbarBottom />
      </ReactQueryCacheProvider>
    </>
  );
};

CategoriesPage.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.array,
};
