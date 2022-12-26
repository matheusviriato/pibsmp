import type { ReactElement } from 'react';
import {
  Wrapper,
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
      <DonationExplanationArea>
        <Title>Doe agora:</Title>
        <Text>Sua doação ajuda a manter os projetos da Igreja</Text>
      </DonationExplanationArea>
      <div>
        <Text>Banco: xxxxx</Text>
        <Text>Conta: xxxxx</Text>
        <Text>Agência: xxxxx</Text>
      </div>
      <PixArea>
        <PixTitle>Doe Com PIX</PixTitle>
        <PixQrCode src={tempPix} />
      </PixArea>
    </Wrapper>
  );
};

export { Donation };
