import { ReactElement } from 'react';
import {
  Wrapper,
  PibLogo,
  SocialWrapper,
  SocialMedias,
  Content,
  Title,
  StoreBadge,
  AppDownload,
} from './styles';
import pibLogo from '@/assets/piblogo.png';
import facebookIcon from '@/assets/facebook-icon.svg';
import youtubeIcon from '@/assets/youtube-icon.svg';
import googlePlay from '@/assets/google-play-badge.png';
import appStore from '@/assets/app-store-badge.svg';

const Footer = (): ReactElement => {
  return (
    <Wrapper>
      <Content>
        <SocialWrapper>
          <PibLogo src={pibLogo} />
          <SocialMedias>
            <a href="https://www.facebook.com/pibsaomiguel" target="_blank">
              <img src={facebookIcon} />
            </a>
            <a href="https://www.youtube.com/@Pibsaomiguel" target="_blank">
              <img src={youtubeIcon} />
            </a>
          </SocialMedias>
        </SocialWrapper>

        <div>
          <Title>Fale conosco:</Title>
          <p>Whatsapp: +55 (11) 99999-9999</p>
          <p>Telefone: +55 (11) 9999-9999</p>
        </div>

        <div>
          <Title>Baixe o nosso app:</Title>
          <AppDownload>
            <a
              href="https://play.google.com/store/apps/details?id=br.com.raise.app10976&hl=pt_BR&gl=US"
              target="_blank"
            >
              <StoreBadge src={googlePlay} />
            </a>
            <a href="#">
              <StoreBadge src={appStore} />
            </a>
          </AppDownload>
        </div>
      </Content>
    </Wrapper>
  );
};

export { Footer };
