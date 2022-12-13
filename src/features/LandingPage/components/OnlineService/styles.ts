import { styled } from '@stitches/react';

export const Wrapper = styled('section', {
  padding: '64px 12px',
  backgroundColor: '#f3f3f380',
  '@media (max-width: 425px)': {
    padding: '32px 12px',
  }
});

export const Title = styled('h3', {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '24px',
  '@media (max-width: 425px)': {
    fontSize: '18px',
  }
});


export const Subtitle = styled('p', {
  fontSize: '18px',
  marginBottom: '32px',
  '@media (max-width: 425px)': {
    fontSize: '16px',
  }
});

export const Content = styled('div', {
  margin: '0 auto',
  maxWidth: '768px',
});

export const SocialMedias = styled('div', { 
  display: 'flex',
  justifyContent: 'space-around',
});

export const MediaIcon = styled('img', {
  width: '80px',
  height: '80px',
  '@media (max-width: 425px)': {
    width: '48px',
    height: '48px',
  }
});