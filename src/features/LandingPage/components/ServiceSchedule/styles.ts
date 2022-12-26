import { styled } from '@stitches/react';

export const Wrapper = styled('section', {
  padding: '52px 16px',
  backgroundColor: '#D9D9D9',
  '@media (max-width: 768px)': {
    padding: '64px 16px',
  }
});

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  textAlign: 'center',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '20px',
  }
});

export const Title = styled('h3', {
  fontSize: '20px',
  fontWeight: 800,
  marginBottom: '28px',
  '@media (max-width: 768px)': {
    marginBottom: '20px',
  }
});

export const Text = styled('p', {
  fontSize: '16px',
  fontWeight: 400,
  '@media (max-width: 768px)': {
    fontSize: '14px',
  }
});
