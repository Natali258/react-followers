import React, { useState } from "react";
import {
  StyleDropdownBox,
  StyleDropdownLi,
  StyleDropdownLiText,
  StyleDropdownList,
} from "./Dropdown.styled";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filterSlice/filterSlice";

export const Dropdown = () => {
  const dispatch = useDispatch();

  const options = [
    { label: "show all", value: "all" },
    { label: "follow", value: "follow" },
    { label: "followings", value: "followings" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    console.log(option);
    dispatch(changeFilter(option.value));
    setIsOpen(false);
  };

  return (
    <StyleDropdownBox>
      <div onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : "Please select..."}
      </div>
      {isOpen && (
        <StyleDropdownList>
          {options.map((option) => (
            <StyleDropdownLi
              key={option.value}
              onClick={() => handleOptionClick(option)}
            >
              <StyleDropdownLiText>{option.label}</StyleDropdownLiText>
            </StyleDropdownLi>
          ))}
        </StyleDropdownList>
      )}
    </StyleDropdownBox>
  );
};
