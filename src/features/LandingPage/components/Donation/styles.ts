import { styled } from '@stitches/react';

export const Wrapper = styled('section', {
  padding: '59px 0px',
  display: 'flex',
  flexDirection: 'column',
});

export const Title = styled('h3', {
  fontSize: '32px',
  marginBottom: '43px',
  fontWeight: 800,
  alignSelf: 'center',
});

export const Content = styled('div', {
  fontSize: '24px',
  fontWeight: 300,
  display: 'flex',
  justifyContent: 'space-evenly'
});
