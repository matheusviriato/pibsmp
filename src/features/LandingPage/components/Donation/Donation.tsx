import type { ReactElement } from 'react';
import { Wrapper, Title, Content } from './styles';

const Donation = (): ReactElement => {
  return (
    <Wrapper>
      <Title>Doações</Title>
      <Content>
        <div>
          <p>Faça sua doação usando os dados abaixo:</p>
          <p>Banco: xxxx</p>
          <p>Conta: xxxx</p>
          <p>Agência: xxxx</p>
        </div>
        <div>
          <p>Doe com PIX</p>
        </div>
      </Content>
    </Wrapper>
  );
};

export { Donation };
