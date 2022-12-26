import { styled } from '@stitches/react';

export const Wrapper = styled('section', {
  backgroundColor: '#fff',
  padding: '96px 16px 60px 16px',
  '@media (max-width: 768px)': {
    padding: '88px 16px',
  }
});

export const Content = styled('div', {
  margin: '0 auto',
  maxWidth: '1024px',
  display: 'flex',
  justifyContent: 'space-evenly',
  flexDirection: 'row',
  alignItems: 'center',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '58px',
    textAlign: 'center',
  }
});

export const PibLogo = styled('div', {
  'img': {
    height: '68px',
    width: '228px',
  },
  '@media (max-width: 768px)': {
    order: 3,
  },
});

export const Text = styled('p', {
  fontSize: '20px',
  fontWeight: 400,
  '@media (max-width: 768px)': {
    fontSize: '14px',
  }
});

export const AppTitle = styled('p', {
  fontSize: '20px',
  fontWeight: 700,
  marginBottom: '14px',
});

export const SocialMediasArea = styled('div', {
  display: 'flex',
  gap: '20px',
  marginTop: '24px',
  '@media (max-width: 768px)': {
    gap: 0,
    justifyContent: 'space-evenly',
  }
})

export const Title = styled('p', {
  fontWeight: 400,
  marginBottom: '12px',
});

export const AppDownload = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  '@media (max-width: 425px)': {
    flexDirection: 'row',
    gap: '12px',
  }
})

export const StoreArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const StoreBadge = styled('img', {
  width: '120px',
});
