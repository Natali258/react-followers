import React from "react";
import fonImage from "../../images/fonImage.png";
import {
  StyleBtnUsers,
  StyleHomeBox,
  StyleHomeContainer,
  StyleHomeImg,
  StyleHomeTitle,
} from "./Home.styled";

export const Home = () => {
  return (
    <StyleHomeContainer>
      <StyleHomeBox>
        <StyleHomeTitle>A place of happy people!</StyleHomeTitle>
        <StyleHomeImg>
          <source srcSet={`${fonImage}`} type="image/png" />
          <img src={fonImage} alt="social applications photos" width="100%" />
        </StyleHomeImg>
        <StyleBtnUsers to="/tweets">Users</StyleBtnUsers>
      </StyleHomeBox>
    </StyleHomeContainer>
  );
};
