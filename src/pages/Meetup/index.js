import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';

import {
  newMeetupRequest,
  updateMeetupRequest,
} from '~/store/modules/meetup/actions';

import { Container } from './styles';

import ImageInput from './ImageInput';
import DateInput from '~/components/DateInput';

export default function Meetup() {
  const dispatch = useDispatch();

  const meetup = useSelector(state => state.meetup.meetup);

  function handleSubmit(data) {
    if (meetup) {
      dispatch(updateMeetupRequest(data));
    } else {
      dispatch(newMeetupRequest(data));
    }
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <ImageInput name="image_id" />
        <Input name="title" placeholder="Titulo do meetup" />
        <Input multiline name="description" placeholder="Dercrição completa" />
        <DateInput name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />
        {meetup && <Input type="hidden" name="id" />}
        <button type="submit">
          {meetup ? 'Atualizar meetup' : 'Salvar meetup'}
        </button>
      </Form>
    </Container>
  );
}
