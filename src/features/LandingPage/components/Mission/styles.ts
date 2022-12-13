import { styled } from '@stitches/react';

export const Wrapper = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '64px 12px',
  '@media (max-width: 425px)': {
    padding: '32px 12px',
  }
});

export const Title = styled('h1', {
  fontSize: '32px',
  marginBottom: '32px',
  fontWeight: 'bold',
  '@media (max-width: 425px)': {
    fontSize: '18px',
  }
});

export const Content = styled('div', {
  margin: '0 auto',
  maxWidth: '480px',
});
