import React from "react";
import S from "./AppStoreCard.style";

import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";

const AppStoreCard = ({ match, app }) => {
  const { name, description, imgSrc, route } = app;

  return (
    <S.AppStoreCardWrapper className="custom-card">
      <Link className="link" to={`${match.path}/${route}`}>
        <S.CardContainer className="card-app">
          <S.ImgWrapper className="img-wrapper">
              <img
                src={`${imgSrc}`}
                loading="lazy"
                alt={`${name} img`}
                className="app-img"
              />
          </S.ImgWrapper>
          <S.TitleText className="app-title">{name}</S.TitleText>
          <S.DescriptionText className="app-description">
            {description}
          </S.DescriptionText>
          <S.BtnStart className="btn--start">Start</S.BtnStart>
        </S.CardContainer>
      </Link>
    </S.AppStoreCardWrapper>
  );
};

AppStoreCard.propTypes = {
  app: PropTypes.object.isRequired,
};

export default withRouter(AppStoreCard);
