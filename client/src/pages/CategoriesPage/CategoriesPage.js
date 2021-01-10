import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import { ContentWrapper } from "../../components/Wrapper";
import CardSmall from "../../components/CardSmall";
import NavbarBottom from "../../components/NavbarBottom";
import { useQuery } from "react-query";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const CategoriesPage = ({ title, setTitle }) => {
  const { isLoading, error, data } = useQuery("userCategories", () =>
    fetch(`/api/users/5fdb22ca3c243e0a96a8bd1e`).then((res) => res.json())
  );

  if (isLoading) {
    return <LoadingSpinner title={title} />;
  }
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Header title={title} />
      <ContentWrapper>
        {data.categories ? (
          data.categories.map((item) => (
            <Link
              key={item.categoryId}
              to={`/category/${item.categoryId}`}
              onClick={() => setTitle(item.categoryName)}
            >
              <CardSmall
                cardTitle={item.categoryName}
                cardText={[item.categoryDescription]}
                imgSrc={item.categoryImage}
              />
            </Link>
          ))
        ) : (
          <>Can't load data</>
        )}
        <a href="/storybook" target="_blank">
          Go to Storybook
        </a>
      </ContentWrapper>
      <NavbarBottom />
    </>
  );
};

CategoriesPage.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.array,
  setTitle: PropTypes.func,
};
