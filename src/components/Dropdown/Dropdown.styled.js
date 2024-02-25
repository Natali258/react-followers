import styled from "styled-components";

export const StyleDropdownBox = styled.div`
  position: relative;
  padding: 14px 28px;
  width: 130px;
  height: 18px;
  border: 2px solid var(--btn-load);
  border-radius: 10px;
  transition: 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;

  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;

  &:hover,
  &:focus {
    border: 2px solid var(--btn-hover);
  }
`;
export const StyleDropdownList = styled.ul`
  position: absolute;
  transform: translate(-16%, 0%);

  padding: 0;
  width: 186px;
  border: 2px solid var(--btn-load);
  border-radius: 10px;
  transition: 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;

  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;

  &:hover,
  &:focus {
    border: 2px solid var(--btn-hover);
  }
`;
export const StyleDropdownLi = styled.li`
  list-style-type: none;

  &:hover,
  &:focus {
    background-color: var(--btn-hover);
  }
`;
export const StyleDropdownLiText = styled.div`
  margin-left: 28px;
`;
