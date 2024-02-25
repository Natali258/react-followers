import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyleHomeContainer = styled.div``;

export const StyleHomeBox = styled.div`
  width: 100%;
  padding: 50px;
  box-sizing: border-box;
`;
export const StyleHomeTitle = styled.div`
  margin: 20px 0;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 45px;
  color: var(--btn-load);
`;
export const StyleHomeImg = styled.picture`
  width: 250px;
`;
export const StyleBtnUsers = styled(NavLink)`
  display: block;
  margin: 20px auto;
  border-radius: 10px;
  padding: 14px 5px;
  width: 150px;
  border: none;
  cursor: pointer;
  background: var(--btn-load);
  transition: 200ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    background: var(--btn-load-hover);
  }

  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: var(--main-color);
  text-align: center;
  text-decoration: none;
`;
