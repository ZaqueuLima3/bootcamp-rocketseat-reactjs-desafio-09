import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { meetupsRequest } from '~/store/modules/meetups/actions';

import { Container, Header } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetups.meetups);

  useEffect(() => {
    dispatch(meetupsRequest());
  }, [dispatch]);

  return (
    <Container>
      <Header>
        <h1>Meus meetups</h1>
        <button type="button">Novo meetup</button>
      </Header>

      <ul>
        {meetups.map(meetup => (
          <li>
            <a href="/">{meetup.title}</a>
            <span>{meetup.dataFormatted}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
}
