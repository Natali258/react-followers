import React, { useEffect } from "react";
import { CardsList } from "../../components/CardsList/CardsList";
import { useDispatch, useSelector } from "react-redux";
import { changePage, fetchUsers } from "../../redux/users/operations";
import { selectPage } from "../../redux/users/slice";
import { StyleBox, StyleBtnBack, StyleBtnLoad } from "./FollowersPage.styled";
import { Dropdown } from "../../components/Dropdown/Dropdown";

const FollowersPage = () => {
  const dispatch = useDispatch();
  const nextPage = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchUsers(nextPage));
  }, [dispatch, nextPage]);

  return (
    <div>
      <StyleBox>
        <StyleBtnBack to="/">Back</StyleBtnBack>
        <Dropdown />
      </StyleBox>
      <CardsList />
      <StyleBtnLoad
        onClick={() => {
          dispatch(changePage(nextPage + 1));
        }}
      >
        Load more...
      </StyleBtnLoad>
    </div>
  );
};

export default FollowersPage;
