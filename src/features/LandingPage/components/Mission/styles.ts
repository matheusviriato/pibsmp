import { styled } from '@stitches/react';

export const Wrapper = styled('section', {
  textAlign: 'center',
  padding: '24px 16px',
  '@media (max-width: 425px)': {
    padding: '12px 16px',
  }
});

export const Title = styled('h1', {
  fontSize: '32px',
  marginBottom: '32px',
  fontWeight: 600,
  '@media (max-width: 425px)': {
    fontSize: '18px',
  }
});

export const Content = styled('div', {
  margin: '0 auto',
  maxWidth: '480px',
});

export const Divider = styled('div', {
  height: '1px',
  width: '100%',
  marginTop: '22px',
  backgroundColor: '#ccc',
})