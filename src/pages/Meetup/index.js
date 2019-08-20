import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';

import { newMeetupRequest } from '~/store/modules/meetup/actions';

import { Container, Image } from './styles';

import DateInput from '~/components/DateInput';

export default function Meetup(props) {
  const dispatch = useDispatch();

  function handleSubmit(dataM) {
    dispatch(newMeetupRequest(dataM));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Image htmlFor="image">Selecionar Imagem</Image>
        <Input type="file" id="image" name="image" hidden />
        <Input name="title" placeholder="Titulo do meetup" />
        <Input multiline name="description" placeholder="Dercrição completa" />
        <DateInput name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />
        <button type="submit">Salvar meetup</button>
      </Form>
    </Container>
  );
}
