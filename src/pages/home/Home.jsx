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
  IconText,
  DivCenter,
  DivType,
  DropType,
} from './Styles';

import { LuPenLine } from 'react-icons/lu';
import { IoUnlink } from 'react-icons/io5';
import { ImFilesEmpty } from 'react-icons/im';

import { useState } from 'react';

function Home() {
  const [selecteType, setSelectedType] = useState(null);

  const onTypeChange = (e) => {
    setSelectedType(e.value);
  };

  const types = [{ name: 'Lazer' }, { name: 'Reunião' }, { name: 'Tarefa' }];

  return (
    <ConteinerHome>
      <ConteinerAddEvent>
        <AddEventTitle>ADICIONAR NOVO EVENTO</AddEventTitle>
        <DecorLine></DecorLine>
        <DivForm>
          <Form>
            <ConteinerText>
              <Text>Título</Text>
              <IconText>
                <LuPenLine color="white" size={25} />
              </IconText>
            </ConteinerText>
            <Inputs placeholder="Festa"></Inputs>
            <ConteinerText>
              <Text>Imagem</Text>
              <IconText>
                <IoUnlink color="white" size={25} />
              </IconText>
            </ConteinerText>
            <Inputs placeholder="Https//.........."></Inputs>
            <ConteinerText>
              <Text>Descrição</Text>
              <IconText>
                <ImFilesEmpty color="white" size={25} />
              </IconText>
            </ConteinerText>
            <Inputs placeholder="Descrição curta"></Inputs>
            <DivCenter>
              <DivType>
                <Text>Categoria:</Text>
                <DropType
                  value={selecteType}
                  options={types}
                  onChange={onTypeChange}
                  optionLabel="name"
                  placeholder="Opções de categoria"
                />
              </DivType>
            </DivCenter>
          </Form>
        </DivForm>
      </ConteinerAddEvent>
    </ConteinerHome>
  );
}

export default Home;
