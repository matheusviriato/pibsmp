import type { ReactElement } from 'react';
import { Wrapper, Title, Content } from './styles';

const Mission = (): ReactElement => {
  return (
    <Wrapper>
      <Content>
        <Title>Nossa missão</Title>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode
          alegrar sua vidis.Casamentiss faiz malandris se pirulitá.Leite de capivaris, leite de mula
          manquis sem cabeça.Detraxit consequat et quo num tendi nada.
        </p>
      </Content>
    </Wrapper>
  );
};

export { Mission };
