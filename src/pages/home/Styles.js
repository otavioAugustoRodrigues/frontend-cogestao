import { styled } from 'styled-components';
import { Dropdown } from 'primereact/dropdown';

export const ConteinerHome = styled.header`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//ADICIONAR EVENTO

export const ConteinerAddEvent = styled.div`
  height: auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 97px 0;
`;

export const AddEventTitle = styled.a`
  font-size: 60px;
  font-family: Cabin;
  color: #eedac5;
  font-weight: bold;
`;

export const DecorLine = styled.p`
  height: 3px;
  width: 88%;
  background-color: #ffd599;
  margin: 0 0 53px 0;
`;
export const DivForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  align-items: end;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const ConteinerText = styled.div`
  display: flex;
`;

export const Text = styled.a`
  font-size: 24px;
  font-family: Cabin;
  color: #fff;
  font-weight: bold;
`;

export const IconText = styled.div`
  align-items: center;
  justify-content: center;
  padding: 2px;
`;

export const Inputs = styled.input`
  width: 100%;
  height: 52px;
  background-color: transparent;
  border: solid 2px white;
  border-radius: 4px;
  margin: 0 0 38px 0;
  color: white;
  font-size: 22px;
`;

export const DivCenter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DivType = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const DropType = styled(Dropdown)`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border: solid 2px white;
  border-radius: 5px;
  min-width: 200px;
  padding: 3%;
  .p-dropdown-label {
    color: white;
  }
`;

export const FormsButton = styled.button`
  width: 30%;
  height: 80px;
  background-color: #f19709;
  color: white;
  border: solid 2px #f19709;
  border-radius: 5px;
  margin-top: 53px;
  font-size: 28px;
  font-family: Cabin;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

//GERENCIAR EVENTO

export const ConteinerEvents = styled.div`
  height: auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 97px 0;
`;

export const EventsTitle = styled.a`
  font-size: 60px;
  font-family: Cabin;
  color: #eedac5;
  font-weight: bold;
`;
