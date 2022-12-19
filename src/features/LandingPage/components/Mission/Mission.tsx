import type { ReactElement } from 'react';
import { Wrapper, Title, Text, Content } from './styles';

const Mission = (): ReactElement => {
  return (
    <Wrapper>
      <Content>
        <Title>Nossa missão</Title>
        <Text>Transformar e restaurar vidas.</Text>
        <Text>
          Ser uma Igreja adoradora, acolhedora, temente à Palavra de Deus e comprometida em fazer
          Jesus conhecido de todas as nações.
        </Text>
      </Content>
    </Wrapper>
  );
};

export { Mission };
