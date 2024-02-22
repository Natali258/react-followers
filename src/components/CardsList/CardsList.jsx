import React, { useEffect } from "react";
import { fetchUsers, updateUsers } from "../../redux/users/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectFollowers, selectUsers } from "../../redux/users/slice";
import { StyleCardsContainer, StyleCardsLi } from "./CardsList.styled";
import { Icon } from "../Icon/Icon";

export const CardsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
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
            <Icon name="logoCards" /* className={s.iconCards} size="20" */ />
            <p>{item.followers} followers</p>
            <p>{item.tweets} tweets</p>
            {!usersFollowers.includes(item.id) ? (
              <button onClick={() => addFollower(item.id, item)}>Follow</button>
            ) : (
              <button onClick={() => removeFollower(item.id, item)}>
                Following
              </button>
            )}
          </StyleCardsLi>
        ))}
      </ul>
    </StyleCardsContainer>
  );
};
