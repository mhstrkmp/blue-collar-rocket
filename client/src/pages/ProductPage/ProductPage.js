import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import { AppWrapper, ContentWrapper } from "../../components/Wrapper";
import CardExtraLarge from "../../components/CardExtraLarge";
import NavbarBottom from "../../components/NavbarBottom";
import { useQuery } from "react-query";

export const ProductPage = ({ title }) => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery("singleItemData", () =>
    fetch(`/api/items/${id}`).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <AppWrapper>
        <Header title={title} />
        <ContentWrapper>
          {data ? (
            data.map((item) => (
              <>
                <CardExtraLarge
                  key={`CardExtraLarge_${item.id}`}
                  title={item.name}
                  imgSrc={item.imgCloudinaryId}
                  description={item.description}
                  service={item.service}
                  price={item.price}
                  itemId={item.id}
                />
              </>
            ))
          ) : (
            <>Can't load data</>
          )}
          <a href="/storybook" target="_blank">
            Go to Storybook
          </a>
        </ContentWrapper>
        <NavbarBottom />
      </AppWrapper>
    </>
  );
};

ProductPage.propTypes = {
  title: PropTypes.string,
  productName: PropTypes.string,
  imgSrc: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  service: PropTypes.array,
  product: PropTypes.array,
};
