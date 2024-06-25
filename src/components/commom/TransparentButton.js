import { styled } from 'styled-components';

export const TransparentButton = styled.button`
  border-radius: 15px;
  width: 212px;
  height: 60px;
  background-color: transparent;
  font-size: 32px;
  color: white;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 620px) {
    width: 190px;
  }
  @media screen and (max-width: 450px) {
    width: 170px;
  }
  &:hover {
    transform: scale(1.2);
  }
`;
