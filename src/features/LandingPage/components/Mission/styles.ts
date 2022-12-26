import { styled } from '@stitches/react';

export const Wrapper = styled('section', {
  textAlign: 'center',
  padding: '168px 16px',
  '@media (max-width: 768px)': {
    padding: '88px 16px',
  }
});

export const Title = styled('h3', {
  fontSize: '32px',
  marginBottom: '43px',
  fontWeight: 800,
  '@media (max-width: 768px)': {
    fontSize: '20px',
    marginBottom: '20px',
  }
});

export const Text = styled('p', {
  fontSize: '24px',
  fontWeight: 400,
  '@media (max-width: 768px)': {
    fontSize: '14px',
  }
});

export const Content = styled('div', {
  margin: '0 auto',
  maxWidth: '620px',
});
