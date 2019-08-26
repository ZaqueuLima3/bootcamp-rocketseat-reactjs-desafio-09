import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Header } from './styles';

import { getMeetupRequest } from '~/store/modules/meetup/actions';

export default function Dashboard() {
  const dispatch = useDispatch();

  const meetups = useSelector(state => state.meetup.meetups);

  async function handleSetMeetup(id) {
    console.log('dash');
  }

  return (
    <Container>
      <Header>
        <h1>Meus meetups</h1>
        <Link to="meetup">Novo meetup</Link>
      </Header>

      <ul>
        {meetups.map(meetup => (
          <li key={meetup.id}>
            <Link to={meetup.url} onClick={() => handleSetMeetup(meetup.id)}>
              {meetup.title}
            </Link>
            <span>{meetup.dataFormatted}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
}
