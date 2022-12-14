import { styled } from '@stitches/react';

export const Wrapper = styled('section', {
  textAlign: 'center',
  padding: '24px 16px',
  '@media (max-width: 425px)': {
    padding: '12px 16px',
  }
});

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  '@media (max-width: 425px)': {
    flexDirection: 'column',
    gap: '24px',
  }
});

export const Title = styled('h3', {
  fontSize: '22px',
  fontWeight: 400,
  marginBottom: '24px',
  '@media (max-width: 425px)': {
    fontSize: '16px',
  }
});
