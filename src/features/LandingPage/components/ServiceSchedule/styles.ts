import { styled } from '@stitches/react';

export const Wrapper = styled('section', {
  padding: '64px 12px',
  justifyContent: 'center',
  '@media (max-width: 425px)': {
    padding: '32px 12px',
  }
});

export const Title = styled('h3', {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '32px',
  '@media (max-width: 425px)': {
    fontSize: '18px',
  }
});

export const Content = styled('div', {
  margin: '0 auto',
  maxWidth: '768px',
});

export const Item = styled('li', {
  marginBottom: '18px',
})

export const Day = styled('p', {
  fontWeight: 'bold',
  marginBottom: '14px',
});