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
  //DropType,
  FormsButton,
  ConteinerEvents,
  EventsTitle,
} from './Styles';

import { LuPenLine } from 'react-icons/lu';
import { IoUnlink } from 'react-icons/io5';
import { ImFilesEmpty } from 'react-icons/im';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { validador } from './utils';
import { useQueryClient } from '@tanstack/react-query';
import { useCreateEvent } from '../../hooks/query/Event';

// import { useState } from 'react';

function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(validador) });

  const queryClient = useQueryClient();

  const { mutate: criarEvento } = useCreateEvent({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['evento'],
      });
      alert('Usuário criado com sucesso!');
    },
    onError: (err) => {
      alert(err.response.data.message);
    },
  });

  const onSubmit = (data) => {
    data['tipo'] = 'Entreterimento';
    criarEvento(data);
  };

  //const [selecteType, setSelectedType] = useState(null);

  // const onTypeChange = (e) => {
  //   setSelectedType(e.value);
  // };

  // const types = [{ name: 'Lazer' }, { name: 'Reunião' }, { name: 'Tarefa' }];

  return (
    <ConteinerHome>
      <ConteinerAddEvent>
        <AddEventTitle>ADICIONAR NOVO EVENTO</AddEventTitle>
        <DecorLine></DecorLine>
        <DivForm>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <ConteinerText>
              <Text>Título</Text>
              <IconText>
                <LuPenLine color="white" size={25} />
              </IconText>
            </ConteinerText>
            <Inputs
              placeholder="Festa"
              error={errors}
              borda={!!errors?.nome?.message}
              {...register('nome')}
            ></Inputs>
            <ConteinerText>
              <Text>Imagem</Text>
              <IconText>
                <IoUnlink color="white" size={25} />
              </IconText>
            </ConteinerText>
            <Inputs
              placeholder="Https//.........."
              error={errors}
              borda={!!errors?.URLimagem?.message}
              {...register('URLimagem')}
            ></Inputs>
            <ConteinerText>
              <Text>Descrição</Text>
              <IconText>
                <ImFilesEmpty color="white" size={25} />
              </IconText>
            </ConteinerText>
            <Inputs
              placeholder="Descrição curta"
              error={errors}
              borda={!!errors?.descricao?.message}
              {...register('descricao')}
            ></Inputs>
            <DivCenter>
              <DivType>
                <Text>Categoria:</Text>
                {/* <DropType
                  value={selecteType}
                  options={types}
                  onChange={onTypeChange}
                  optionLabel="name"
                  placeholder="Opções de categoria"
                /> */}
              </DivType>
              <FormsButton type="submit">ENVIAR</FormsButton>
            </DivCenter>
          </Form>
        </DivForm>
      </ConteinerAddEvent>
      <ConteinerEvents>
        <EventsTitle>GERENCIAR EVENTOS</EventsTitle>
        <DecorLine></DecorLine>
      </ConteinerEvents>
    </ConteinerHome>
  );
}

export default Home;
