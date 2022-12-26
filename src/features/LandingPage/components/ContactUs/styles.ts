import { styled } from '@stitches/react';

export const Wrapper = styled('section', {
  textAlign: 'center',
  padding: '138px 16px',
  '@media (max-width: 768px)': {
    padding: '75px 16px',
  }
});

export const Title = styled('h3', {
  fontSize: '32px',
  marginBottom: '44px',
  fontWeight: 800,
  '@media (max-width: 768px)': {
    fontSize: '20px',
  }
});

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Link = styled('a', {
  textDecoration: 'none',
  color: '#000',
});

export const WhatsappContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '28px',
  maxWidth: '420px',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '13px',
    maxWidth: '282px',
  }
});

export const Text = styled('p', {
  fontSize: '20px',
  fontWeight: 400,
  '@media (max-width: 768px)': {
    fontSize: '14px',
  }
});

export const WhatsappIcon = styled('img', {
  width: '76px',
  height: '76px',
  '@media (max-width: 768px)': {
    width: '49px',
    height: '49px',
  }
})
