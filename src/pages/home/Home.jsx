import { ConteinerHome } from './Styles';
import {
  ConteinerAddEvent,
  AddEventTitle,
  DecorLine,
  DivForm,
  Form,
  ConteinerText,
  Text,
  Inputs,
} from './Styles';

function Home() {
  return (
    <ConteinerHome>
      <ConteinerAddEvent>
        <AddEventTitle>ADICIONAR NOVO EVENTO</AddEventTitle>
        <DecorLine></DecorLine>
        <DivForm>
          <Form>
            <ConteinerText>
              <Text>Título</Text>
            </ConteinerText>
            <Inputs></Inputs>
            <ConteinerText>
              <Text>Imagem</Text>
            </ConteinerText>
            <Inputs></Inputs>
            <ConteinerText>
              <Text>Descrição</Text>
            </ConteinerText>
            <Inputs></Inputs>
          </Form>
        </DivForm>
      </ConteinerAddEvent>
    </ConteinerHome>
  );
}

export default Home;
