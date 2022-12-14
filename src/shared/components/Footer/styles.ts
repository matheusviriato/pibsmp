import { styled } from '@stitches/react';

export const Wrapper = styled('section', {
  backgroundColor: '#fafafa',
  padding: '32px 12px',
});

export const PibLogo = styled('img', {
  height: '62px',
  width: 'fit-content',
  '@media (max-width: 425px)': {
    height: '40px',
  }
});

export const Content = styled('div', {
  display: 'flex',
  justifyContent: 'space-evenly',
  flexDirection: 'row',
  '@media (max-width: 425px)': {
    flexDirection: 'column',
    gap: '24px',
  }
});

export const SocialWrapper = styled('div', {
  '@media (max-width: 425px)': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export const SocialMedias = styled('div', {
  display: 'flex',
  justifyContent: 'space-evenly',
  marginTop: '12px',
  '& img': {
    height: '40px',
  },
  '@media (max-width: 425px)': {
    marginTop: '0px',
    gap: '32px',
    '& img': {
      height: '32px',
    }
  },
})

export const Title = styled('p', {
  fontWeight: '300',
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

export const StoreBadge = styled('img', {
  width: '120px',
});
