import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';

import {
  newMeetupRequest,
  getMeetupRequest,
  updateMeetupRequest,
} from '~/store/modules/meetup/actions';

import { Container, Image } from './styles';

import DateInput from '~/components/DateInput';

export default function MeetupEdit(props) {
  const dispatch = useDispatch();
  const params = new URLSearchParams(props.location.search);
  console.log(params.get('id'));

  const { pathname } = props.location;

  const meetup = useSelector(state => state.meetup.meetup);

  useEffect(() => {
    dispatch(getMeetupRequest(pathname));
  }, [dispatch, pathname]);

  function handleSubmit(dataM) {
    dispatch(updateMeetupRequest(dataM));
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
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
