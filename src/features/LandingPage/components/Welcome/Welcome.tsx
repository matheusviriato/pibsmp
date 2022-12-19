import type { ReactElement } from 'react';
import { Wrapper, Title, Divider, Subtitle, OnlineServiceLink } from './styles';

const Welcome = (): ReactElement => {
  return (
    <Wrapper>
      <Title>Bem-vindo</Title>

      <Divider />

      <Subtitle>Primeira Igreja Batista em São Miguel Paulista</Subtitle>

      <OnlineServiceLink href="https://www.youtube.com/@Pibsaomiguel/streams" target="_blank">
        Cultos Online
      </OnlineServiceLink>
    </Wrapper>
  );
};

export { Welcome };
