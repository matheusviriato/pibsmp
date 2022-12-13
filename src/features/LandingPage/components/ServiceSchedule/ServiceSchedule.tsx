import type { ReactElement } from 'react';
import { Wrapper, Content, Title, Day, Item } from './styles';

const ServiceSchedule = (): ReactElement => {
  return (
    <Wrapper>
      <Content>
        <Title>Programações e horários</Title>

        <ul>
          <Item>
            <Day>Quarta feira:</Day>
            <p>19h - Culto de oração</p>
          </Item>
          <Item>
            <div>
              <Day>Domingo:</Day>
              <p>9h - Culto matutino </p>
              <p>10h30 - EBD</p>
              <p>18h - Culto noturno</p>
            </div>
          </Item>
        </ul>

        <p>Endereço: Rua Arlindo Colaço, 85 - São Paulo, SP</p>
      </Content>
    </Wrapper>
  );
};

export { ServiceSchedule };
