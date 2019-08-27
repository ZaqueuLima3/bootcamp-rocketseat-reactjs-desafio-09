import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { setMeetupClearRequest } from '~/store/modules/meetup/actions';

import { Container, Content, Image } from './styles';

export default function MeetupOpen() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.meetup.loading);
  const meetup = useSelector(state => state.meetup.meetup);

  function handleClearMeetup() {
    dispatch(setMeetupClearRequest());
  }

  return (
    <Container>
      {loading ? (
        <h2>carregando...</h2>
      ) : (
        <>
          <header>
            <h2>{meetup.title}</h2>
            <div>
              <Link to="/meetup">Editar</Link>
              <Link to="/" onClick={handleClearMeetup}>
                Cancelar
              </Link>
            </div>
          </header>

          <Content>
            <Image src={meetup.image.url} />
            <p>{meetup.description}</p>
            <footer>
              <span>{meetup.dataFormatted}</span>
              <span>{meetup.location}</span>
            </footer>
          </Content>
        </>
      )}
    </Container>
  );
}
