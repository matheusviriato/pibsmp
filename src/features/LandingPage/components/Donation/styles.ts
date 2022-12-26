import { styled } from '@stitches/react';

export const Wrapper = styled('section', {
  padding: '23px 16px 44px 16px',
  backgroundColor: '#D9D9D9',
  '@media (max-width: 768px)': {
    padding: '70px 16px',
  }
});

export const Content = styled('div', {
  margin: '0 auto',
  maxWidth: '1024px',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'row',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '38px',
  }
});

export const Title = styled('h3', {
  fontSize: '32px',
  fontWeight: 800,
  '@media (max-width: 768px)': {
    fontSize: '20px',
  }
});

export const PixArea = styled('div', {
  textAlign: 'center',
});

export const PixTitle = styled('p', {
  fontSize: '24px',
  fontWeight: 400,
  marginBottom: '12px',
  '@media (max-width: 768px)': {
    fontSize: '20px',
  }
});

export const PixQrCode = styled('img', {
  height: '90px',
  width: '90px',
});

export const Text = styled('p', {
  fontSize: '20px',
  fontWeight: 400,
  '@media (max-width: 768px)': {
    fontSize: '14px',
  }
});

export const DonationExplanationArea = styled('div', {
  '@media (max-width: 768px)': {
    textAlign: 'center',
  }
});
