import { styled } from '@stitches/react';
import coverImagePath from '@/assets/cover.jpg';

export const Wrapper = styled('section', {
  backgroundImage: `url(${coverImagePath})`,
  backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: '#fff',
  flexDirection: 'column',
  padding: '118px 0px'
  // '@media (max-width: 425px)': {
  //   padding: '0 12px',
  // }
});

export const Title = styled('h1', {
  fontSize: '96px',
  textTransform: 'uppercase',
  fontWeight: '800',
  // '@media (max-width: 425px)': {
  //   fontSize: '54px',
  // }
});

export const Subtitle = styled('h3', {
  fontSize: '32px',
  marginBottom: '87px',
  fontWeight: '400',
  // '@media (max-width: 425px)': {
  //   fontSize: '18px',
  // }
});

export const Divider = styled('div', {
  height: '2px',
  width: '180px',
  margin: '18px 0px',
  backgroundColor: '#fff',
})

export const OnlineServiceLink = styled('a', {
  textDecoration: 'none',
  border: '1px solid #fff',
  borderRadius: '8px',
  padding: '8px 28px',
  fontWeight: 400,
  fontSize: '32px',
  cursor: 'pointer',
  color: '#fff',
});