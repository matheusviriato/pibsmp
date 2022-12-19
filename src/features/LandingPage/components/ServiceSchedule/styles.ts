import { styled } from '@stitches/react';

export const Wrapper = styled('section', {
  padding: '81px 16px',
  backgroundColor: '#D9D9D9',
  // '@media (max-width: 425px)': {
  //   padding: '12px 16px',
  // }
});

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  fontSize: '24px',
  fontWeight: 300,
  textAlign: 'center',
  // '@media (max-width: 425px)': {
  //   flexDirection: 'column',
  //   gap: '24px',
  // }
});

export const Title = styled('h3', {
  fontSize: '32px',
  fontWeight: 800,
  marginBottom: '24px',
  // '@media (max-width: 425px)': {
  //   fontSize: '16px',
  // }
});
