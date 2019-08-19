import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';

import { newMeetupRequest } from '~/store/modules/meetups/actions';

import { Container, Image } from './styles';

export default function Meetup() {
  const dispatch = useDispatch();
  // const { pathname } = data.location;
  // console.tron.log(pathname);

  function handleSubmit(data) {
    dispatch(newMeetupRequest(data));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Image htmlFor="image">Selecionar Imagem</Image>
        <Input type="file" id="image" name="image" hidden />
        <Input name="title" placeholder="Titulo do meetup" />
        <Input multiline name="description" placeholder="Dercrição completa" />
        <Input type="date" name="date" id="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />
        <button type="submit">Salvar meetup</button>
      </Form>
    </Container>
  );
}
