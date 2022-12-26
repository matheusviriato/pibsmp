import { ReactElement } from 'react';
import {
  Wrapper,
  Content,
  PibLogo,
  Text,
  AppTitle,
  StoreArea,
  StoreBadge,
  SocialMediasArea,
  DevelopedBy,
} from './styles';
import pibLogo from '@/assets/pib-logo.png';
import facebookLogo from '@/assets/facebook-logo.png';
import youtubeLogo from '@/assets/youtube-logo.png';
import instagramLogo from '@/assets/instagram-logo.png';
import googlePlay from '@/assets/google-play-badge.png';
import appStore from '@/assets/app-store-badge.svg';

const Footer = (): ReactElement => {
  return (
    <>
      <Wrapper>
        <Content>
          <PibLogo>
            <img src={pibLogo} alt="Logo da PIB São Miguel" />
          </PibLogo>

          <div>
            <Text>Telefone: +55 11 2297-2261</Text>
            <SocialMediasArea>
              <a href="https://www.facebook.com/pibsaomiguel" target="_blank">
                <img src={facebookLogo} alt="Logo do Facebook" />
              </a>
              <a href="https://www.youtube.com/@Pibsaomiguel" target="_blank">
                <img src={youtubeLogo} alt="Logo do Youtube" />
              </a>
              <a href="https://www.instagram.com/pibsaomiguel/" target="_blank">
                <img src={instagramLogo} alt="Logo do Instagram" />
              </a>
            </SocialMediasArea>
          </div>

          <div>
            <AppTitle>Baixe o nosso app</AppTitle>
            <StoreArea>
              <a
                href="https://play.google.com/store/apps/details?id=br.com.raise.app10976&hl=pt_BR&gl=US"
                target="_blank"
              >
                <StoreBadge src={googlePlay} alt="Badge da Google Play Store" />
              </a>
              <a href="#">
                <StoreBadge src={appStore} alt="Badge da Apple App Store" />
              </a>
            </StoreArea>
          </div>
        </Content>
      </Wrapper>
      <DevelopedBy>
        <p>Desenvolvido por PIBSM @ Todos os Direitos Reservados</p>
      </DevelopedBy>
    </>
  );
};

export { Footer };
