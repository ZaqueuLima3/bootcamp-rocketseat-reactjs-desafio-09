import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';

import {
  newMeetupRequest,
  getMeetupRequest,
  updateMeetupRequest,
} from '~/store/modules/meetup/actions';

import { Container, Image } from './styles';

import DateInput from '~/components/DateInput';

export default function MeetupEdit({ match, location: { state } }) {
  const dispatch = useDispatch();

  const meetups = useSelector(state => state.meetup.meetup);

  const { id } = match.params;

  const [meetup, setMeetup] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // dispatch(getMeetupRequest(id));
    async function loadMeetup() {
      const response = await api.get(`/meetups/${id}`);
      const data = {
        title: response.data.title,
        image: response.data.image.url,
        description: response.data.description,
        location: response.data.location,
        date: format(parseISO(response.data.date), "YYY'-'MM'-'dd'T'HH:mm'Z'", {
          locale: pt,
        }),
      };

      setMeetup(data);
    }
    loadMeetup();
  }, [dispatch, id]);

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
