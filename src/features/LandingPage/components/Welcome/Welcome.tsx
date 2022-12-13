import type { ReactElement } from 'react';
import { Wrapper, Title, Subtitle } from './styles';

const Welcome = (): ReactElement => {
  return (
    <Wrapper>
      <Title>Bem-vindo</Title>
      <Subtitle>Primeira Igreja Batista em São Miguel Paulista</Subtitle>
    </Wrapper>
  );
};

export { Welcome };
