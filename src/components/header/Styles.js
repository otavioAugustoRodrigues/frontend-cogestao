import { styled } from 'styled-components';

export const ConteinerHeader = styled.header`
  background-color: #000;
  height: 191px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    height: 67px;
  }
  @media screen and (max-width: 490px) {
    height: 56px;
  }
  @media screen and (max-width: 400px) {
    height: 44px;
  }
`;

export const Logo = styled.img`
  height: 80%;
  cursor: pointer;
  margin: 27px;
`;

export const DivButtons = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TransparentButton = styled.button`
  border-radius: 2px;
  width: 212px;
  height: 60px;
  background-color: transparent;
  font-size: 20px;
  font-family: Exo 2;
  color: white;
  border: solid 2px white;
  cursor: pointer;
  margin: 25px;
  @media screen and (max-width: 620px) {
    width: 190px;
  }
  @media screen and (max-width: 450px) {
    width: 170px;
  }
  &:hover {
    transform: scale(1.05);
  }
`;
