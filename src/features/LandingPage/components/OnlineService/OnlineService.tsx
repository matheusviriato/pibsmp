import type { ReactElement } from 'react';
import facebookIcon from '@/assets/facebook.png';
import youtubeIcon from '@/assets/youtube.png';
import { Wrapper, Content, SocialMedias, MediaIcon, Title, Subtitle } from './styles';

const OnlineService = (): ReactElement => {
  return (
    <Wrapper>
      <Content>
        <Title>Culto online</Title>

        <Subtitle>Transmitimos cultos ao vivo online pelo Facebook e Youtube:</Subtitle>

        <SocialMedias>
          <MediaIcon src={facebookIcon} />
          <MediaIcon src={youtubeIcon} />
        </SocialMedias>
      </Content>
    </Wrapper>
  );
};

export { OnlineService };
