import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container, Image } from './styles';

export default function Meetup(data) {
  const { pathname } = data.location;
  console.tron.log(pathname);

  return (
    <Container>
      <Form>
        <Image htmlFor="image">Selecionar Imagem</Image>
        <Input type="file" id="image" name="image" hidden />
        <Input name="title" placeholder="Titulo do meetup" />
        <Input multiline name="description" placeholder="Dercrição completa" />
        <Input type="date" name="date" id="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />
      </Form>
    </Container>
  );
}
