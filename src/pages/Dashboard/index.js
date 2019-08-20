import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Header } from './styles';

export default function Dashboard() {
  const meetups = useSelector(state => state.meetup.meetups);

  return (
    <Container>
      <Header>
        <h1>Meus meetups</h1>
        <Link to="meetup">Novo meetup</Link>
      </Header>

      <ul>
        {meetups.map(meetup => (
          <li>
            <Link
              to={{
                pathname: meetup.url,
                state: { meetup },
              }}
            >
              {meetup.title}
            </Link>
            <span>{meetup.dataFormatted}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
}
