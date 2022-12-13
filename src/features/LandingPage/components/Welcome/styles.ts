import { styled } from '@stitches/react';
import coverImagePath from '@/assets/cover.jpg';

export const Wrapper = styled('section', {
  height: '680px',
  backgroundImage: `url(${coverImagePath})`,
  backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: '#fff',
  flexDirection: 'column',
  '@media (max-width: 425px)': {
    padding: '0 12px',
  }
});

export const Title = styled('h1', {
  fontSize: '86px',
  marginBottom: '18px',
  fontWeight: 'bold',
  '@media (max-width: 425px)': {
    fontSize: '54px',
  }
});

export const Subtitle = styled('h3', {
  fontSize: '22px',
  '@media (max-width: 425px)': {
    fontSize: '18px',
  }
});
