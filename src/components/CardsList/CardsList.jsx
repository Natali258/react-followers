import React from "react";
import { updateUsers } from "../../redux/users/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectFollowers, selectUsers } from "../../redux/users/slice";
import {
  StyleAvatarContainer,
  StyleBtn,
  StyleBtnUnFollow,
  StyleCardsContainer,
  StyleCardsLi,
  StyleImage,
  StyleImageContainer,
  StyleLine,
  StyleLogoContainer,
  StyleTextFollowers,
  StyleTextTweets,
} from "./CardsList.styled";
import { Icon } from "../Icon/Icon";
import image1 from "../../images/image 1.png";

export const CardsList = () => {
  const dispatch = useDispatch();

  const usersItem = useSelector(selectUsers);
  function addFollower(id, user) {
    dispatch(updateUsers({ id, followers: user.followers + 1 }));
  }
  function removeFollower(id, user) {
    dispatch(updateUsers({ id, followers: user.followers - 1 }));
  }
  const usersFollowers = useSelector(selectFollowers);
  return (
    <StyleCardsContainer>
      <ul>
        {usersItem.map((item) => (
          <StyleCardsLi key={item.id}>
            <StyleLogoContainer>
              <Icon name="logoCards" />
            </StyleLogoContainer>
            <StyleImageContainer>
              <StyleImage>
                <source srcSet={`${image1}`} type="image/png" />
                <img src={image1} alt="Users photos" />
              </StyleImage>
            </StyleImageContainer>
            <StyleAvatarContainer></StyleAvatarContainer>
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
      </ul>
    </StyleCardsContainer>
  );
};
