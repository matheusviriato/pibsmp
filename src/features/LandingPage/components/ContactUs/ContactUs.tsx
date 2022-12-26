import type { ReactElement } from 'react';
import { Wrapper, Title, Content, Link, WhatsappContent, Text, WhatsappIcon } from './styles';
import whatsAppIcon from '@/assets/whatsapp-icon.png';

const ContactUs = (): ReactElement => {
  return (
    <Wrapper>
      <Content>
        <Title>Receba nossas notícias. Cadastre o nosso WhatsApp</Title>
        <Link href="#">
          <WhatsappContent>
            <WhatsappIcon src={whatsAppIcon} />
            <Text>
              Clique aqui para cadastrar o nosso WhatsApp e ficar por dentro do que acontece na PIB!
            </Text>
          </WhatsappContent>
        </Link>
      </Content>
    </Wrapper>
  );
};

export { ContactUs };
