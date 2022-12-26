import type { ReactElement } from 'react';
import { Wrapper, Content, Title, Text } from './styles';

const ServiceSchedule = (): ReactElement => {
  return (
    <Wrapper>
      <Content>
        <div>
          <Title>Horário dos cultos</Title>

          <Text>Quarta-feira (Culto de oração): 19h30</Text>
          <Text>Domingo: 9h00 & 18h00</Text>
          <Text>EBD: 10h15</Text>
        </div>

        <div>
          <Title>Endereço</Title>

          <Text>Rua Arlindo Colaço, 85</Text>
          <Text>São Miguel Paulista, São Paulo - SP</Text>
          <Text>CEP: 08010-010</Text>
        </div>
      </Content>
    </Wrapper>
  );
};

export { ServiceSchedule };
