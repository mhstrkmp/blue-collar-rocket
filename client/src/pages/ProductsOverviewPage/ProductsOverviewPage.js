import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import { ContentWrapper, CardsWrapper } from "../../components/Wrapper";
import NavbarBottom from "../../components/NavbarBottom";
import CardLarge from "../../components/CardLarge";
import { useQuery, QueryCache, ReactQueryCacheProvider } from "react-query";
import { Link, useParams } from "react-router-dom";

const queryCache = new QueryCache();

export const ProductsOverviewPage = ({ title }) => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery("itemData", () =>
    fetch(`/api/items?categoryId=${id}`).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Header title={title} />
        <ContentWrapper>
          <CardsWrapper>
            {data ? (
              data.map((item) => (
                <>
                  <Link key={`Card_${item.id}`} to={`/item/${item.id}`}>
                    <CardLarge
                      key={item.id + "_" + item.name}
                      cardTitle={item.name}
                      imgSrc={item.imgUrl}
                      cardText={item.description}
                      price={item.price}
                    />
                  </Link>
                </>
              ))
            ) : (
              <>Can't load data</>
            )}
          </CardsWrapper>
          <a href="/storybook" target="_blank">
            Go to Storybook
          </a>
        </ContentWrapper>
        <NavbarBottom />
      </ReactQueryCacheProvider>
    </>
  );
};

ProductsOverviewPage.propTypes = {
  title: PropTypes.string,
  products: PropTypes.array,
};
