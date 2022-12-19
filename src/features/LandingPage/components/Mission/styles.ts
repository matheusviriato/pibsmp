import { styled } from '@stitches/react';

export const Wrapper = styled('section', {
  textAlign: 'center',
  padding: '167px 0px',
  '@media (max-width: 425px)': {
    padding: '12px 16px',
  }
});

export const Title = styled('h3', {
  fontSize: '32px',
  marginBottom: '43px',
  fontWeight: 800,
  '@media (max-width: 425px)': {
    fontSize: '18px',
  }
});

export const Text = styled('p', {
  fontSize: '24px',
  fontWeight: 300,
});

export const Content = styled('div', {
  margin: '0 auto',
  maxWidth: '620px',
});
