import type { ReactElement } from 'react';
import { Wrapper, Title, Subtitle, OnlineServiceLink } from './styles';

const Welcome = (): ReactElement => {
  return (
    <Wrapper>
      <Title>Bem-vindo</Title>
      <Subtitle>Primeira Igreja Batista em São Miguel Paulista</Subtitle>
      <OnlineServiceLink href="https://www.youtube.com/@Pibsaomiguel/streams" target="_blank">
        Cultos online
      </OnlineServiceLink>
    </Wrapper>
  );
};

export { Welcome };
