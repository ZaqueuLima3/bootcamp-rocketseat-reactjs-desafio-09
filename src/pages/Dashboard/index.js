import React from 'react';

import { Container, Header } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <h1>Meus meetups</h1>
        <button type="button">Novo meetup</button>
      </Header>

      <ul>
        <li>
          <a href="/">Meetup de React Native</a>
          <span>24 de julho, ás 20h</span>
        </li>
        <li>
          <a href="/">Meetup de React Native</a>
          <span>24 de julho, ás 20h</span>
        </li>
        <li>
          <a href="/">Meetup de React Native</a>
          <span>24 de julho, ás 20h</span>
        </li>
        <li>
          <a href="/">Meetup de React Native</a>
          <span>24 de julho, ás 20h</span>
        </li>
      </ul>
    </Container>
  );
}
