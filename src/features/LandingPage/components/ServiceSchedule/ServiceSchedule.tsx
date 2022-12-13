import type { ReactElement } from 'react';
import { Wrapper, Content, Title } from './styles';

const ServiceSchedule = (): ReactElement => {
  return (
    <Wrapper>
      <Content>
        <div>
          <Title>Horário dos cultos</Title>

          <p>Quarta-feira (Culto de oração): 19:30</p>
          <p>Domingo: 9:00 & 18:00</p>
        </div>

        <div>
          <Title>Endereço</Title>

          <p>Rua Arlindo Colaço, 85</p>
          <p>São Miguel Paulista, São Paulo - SP</p>
          <p>08010-010</p>
        </div>
      </Content>
    </Wrapper>
  );
};

export { ServiceSchedule };
