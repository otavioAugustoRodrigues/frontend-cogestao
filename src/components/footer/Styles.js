import { styled } from 'styled-components';

export const ConteinerFooter = styled.footer`
  background-color: #000;
  height: 245px;
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

export const Contact = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: flex-end;
  margin: 0px 90px;
`;

export const Text = styled.a`
  font-family: Cabin;
  font-size: 42px;
  color: white;
  text-align: right;
`;
