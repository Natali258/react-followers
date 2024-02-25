import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 25px;
  margin-top: 75px;
`;

export const StyleBtnLoad = styled.button`
  display: block;
  margin: 0 auto;
  margin-bottom: 50px;
  border-radius: 10px;
  padding: 14px 28px;
  width: 196px;
  height: 50px;
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
`;
export const StyleBtnBack = styled(NavLink)`
  display: block;
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
