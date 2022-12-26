import type { ReactElement } from 'react';
import {
  Wrapper,
  Content,
  Title,
  Text,
  PixTitle,
  PixArea,
  PixQrCode,
  DonationExplanationArea,
} from './styles';
import tempPix from '@/assets/temp-pix.png';

const Donation = (): ReactElement => {
  return (
    <Wrapper>
      <Content>
        <DonationExplanationArea>
          <Title>Doe agora:</Title>
          <Text>Sua doação ajuda a manter os projetos da Igreja</Text>
        </DonationExplanationArea>
        <div>
          <Text>Banco: Itaú Unibanco S.A</Text>
          <Text>Conta: 7593-2</Text>
          <Text>Agência: 7877</Text>
          <Text>CNPJ: 63.103.626/0001-43</Text>
        </div>
        <PixArea>
          <PixTitle>Doe Com PIX</PixTitle>
          <PixQrCode src={tempPix} />
        </PixArea>
      </Content>
    </Wrapper>
  );
};

export { Donation };
