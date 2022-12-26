import type { ReactElement } from 'react';
import { Wrapper, Title, Content, Link, WhatsappContent, Text, WhatsappIcon } from './styles';
import whatsAppIcon from '@/assets/whatsapp-icon.png';

const ContactUs = (): ReactElement => {
  return (
    <Wrapper>
      <Content>
        <Title>Receba nossas notícias. Cadastre o nosso WhatsApp</Title>
        <Link href="https://wa.me/message/IUGAHKZOZWSJD1" target="_blank">
          <WhatsappContent>
            <WhatsappIcon src={whatsAppIcon} alt="Logo do Whatsapp" />
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
