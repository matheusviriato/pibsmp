import { styled } from '@stitches/react';
// import coverImagePath from '@/assets/cover.jpg';

export const Wrapper = styled('section', {
  // backgroundImage: `url(${coverImagePath})`,
  // backgroundSize: 'cover',
  // backgroundPosition: 'bottom',
  backgroundColor: '#D9D9D9',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  color: '#000',
  flexDirection: 'column',
  padding: '118px 16px',
  '@media (max-width: 768px)': {
    padding: '80px 16px',
  }
});

export const Title = styled('h1', {
  fontSize: '96px',
  textTransform: 'uppercase',
  fontWeight: '800',
  '@media (max-width: 768px)': {
    fontSize: '40px',
  }
});

export const Subtitle = styled('h3', {
  fontSize: '32px',
  marginBottom: '87px',
  fontWeight: '400',
  '@media (max-width: 768px)': {
    fontSize: '16px',
    marginBottom: '68px',
  }
});

export const Divider = styled('div', {
  height: '2px',
  width: '180px',
  margin: '18px 0px',
  backgroundColor: '#000',
  '@media (max-width: 768px)': {
    width: '110px',
  }
})

export const OnlineServiceLink = styled('a', {
  textDecoration: 'none',
  border: '1px solid #000',
  borderRadius: '8px',
  padding: '8px 28px',
  fontWeight: 400,
  fontSize: '32px',
  cursor: 'pointer',
  color: '#000',
  '@media (max-width: 768px)': {
    fontSize: '18px',
  }
});