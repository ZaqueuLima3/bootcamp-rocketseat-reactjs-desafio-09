import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
        <Link to="meetup">Novo meetup</Link>
      </Header>

      <ul>
        {meetups.map(meetup => (
          <li>
            <Link to={meetup.url}>{meetup.title}</Link>
            <span>{meetup.dataFormatted}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
}
