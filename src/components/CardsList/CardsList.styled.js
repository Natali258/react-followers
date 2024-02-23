import styled from "styled-components";

export const StyleCardsContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: white;
`;
export const StyleCardsLi = styled.li`
  list-style-type: none;
  border-radius: 20px;
  width: 380px;
  height: 460px;
  box-shadow: -3px 7px 21px 0 rgba(0, 0, 0, 0.23);
  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
`;
export const StyleImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyleImage = styled.picture`
  margin-top: 28px;
`;
export const StyleLogoContainer = styled.div`
  position: absolute;
  left: 10%;
  transform: translate(-11%, 80%);
`;
export const StyleAvatarContainer = styled.div`
  position: absolute;
  left: 33%;
  transform: translate(-50%, -19%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--main-color);
  box-shadow: inset 0 4px 3px 0 #fbf8ff, 0 4px 4px 0 rgba(0, 0, 0, 0.06),
    inset 0 -2px 4px 0 #ae7be3;
`;
export const StyleLine = styled.div`
  width: 100%;
  height: 8px;
  margin-top: 18px;
  background-color: var(--main-color);
  box-shadow: inset 0 3px 3px 0 #fbf8ff, 0 3px 3px 0 rgba(0, 0, 0, 0.06),
    inset 0 -2px 3px 0 #ae7be3;
`;
export const StyleTextTweets = styled.p`
  margin-top: 62px;
  margin-bottom: 16px;
  text-align: center;
  color: var(--main-color);
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
`;
export const StyleTextFollowers = styled.p`
  margin: 0;
  margin-bottom: 26px;
  text-align: center;
  color: var(--main-color);
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
`;
export const StyleBtn = styled.button`
  display: block;
  margin: 0 auto;
  border-radius: 10px;
  padding: 14px 28px;
  width: 196px;
  height: 50px;
  border: none;
  cursor: pointer;

  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: var(--btn-color-text);
  background-color: var(--main-color);
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25);
`;
export const StyleBtnUnFollow = styled.button`
  display: block;
  margin: 0 auto;
  border-radius: 10px;
  padding: 14px 28px;
  width: 196px;
  height: 50px;
  border: none;
  cursor: pointer;

  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: var(--btn-color-text);
  background-color: var(--btn-hover);
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.25);
`;
