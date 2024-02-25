import React from "react";
import { updateUsers } from "../../redux/users/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectFollowers, selectUsers } from "../../redux/users/slice";
import {
  StyleAvatarContainer,
  StyleAvatarImg,
  StyleBtn,
  StyleBtnUnFollow,
  StyleCardsContainer,
  StyleCardsLi,
  StyleCardsList,
  StyleImage,
  StyleImageContainer,
  StyleLine,
  StyleLogoContainer,
  StyleTextFollowers,
  StyleTextTweets,
} from "./CardsList.styled";
import { Icon } from "../Icon/Icon";
import image1 from "../../images/image 1.png";
import { selectFilter } from "../../redux/filterSlice/filterSlice";

export const CardsList = () => {
  const dispatch = useDispatch();

  const usersItem = useSelector(selectUsers);
  function addFollower(id, user) {
    dispatch(updateUsers({ id, followers: user.followers + 1 }));
  }
  function removeFollower(id, user) {
    dispatch(updateUsers({ id, followers: user.followers - 1 }));
  }
  const followers = useSelector(selectFollowers);
  const filter = useSelector(selectFilter);
  const getFilterValue = () => {
    switch (filter) {
      case "follow":
        return usersItem.filter((item) => !followers.includes(item.id));
      case "followings":
        return usersItem.filter((item) => followers.includes(item.id));
      default:
        return usersItem;
    }
  };
  const filterSelect = getFilterValue();

  const usersFollowers = useSelector(selectFollowers);
  return (
    <StyleCardsContainer>
      <StyleCardsList>
        {filterSelect.map((item) => (
          <StyleCardsLi key={item.id}>
            <StyleLogoContainer>
              <Icon name="logoCards" />
            </StyleLogoContainer>
            <StyleImageContainer>
              <StyleImage>
                <source src={`${image1}`} type="image/png" />
                <img src={image1} alt="Users photos" />
              </StyleImage>
            </StyleImageContainer>
            <StyleAvatarContainer>
              <StyleAvatarImg src={item.avatar} alt="Users photos" />
            </StyleAvatarContainer>
            <StyleLine></StyleLine>
            <StyleTextTweets>{item.tweets} tweets</StyleTextTweets>
            <StyleTextFollowers>{item.followers} followers</StyleTextFollowers>
            {!usersFollowers.includes(item.id) ? (
              <StyleBtn onClick={() => addFollower(item.id, item)}>
                Follow
              </StyleBtn>
            ) : (
              <StyleBtnUnFollow onClick={() => removeFollower(item.id, item)}>
                Following
              </StyleBtnUnFollow>
            )}
          </StyleCardsLi>
        ))}
      </StyleCardsList>
    </StyleCardsContainer>
  );
};
