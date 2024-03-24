import { style, styleVariants } from '@vanilla-extract/css';

export const btnSize = styleVariants({
  sm: {
    padding: '10px 16px',
    fontSize: '12px',
  },
  md: {
    padding: '11px 20px',
    fontSize: '14px',
  },
  lg: {
    padding: '12px 24px',
    fontSize: '16px',
  },
});

export const btnBase = style({
  transition: 'opacity 0.3s',
  cursor: 'pointer',
  boxSizing: 'border-box',
  boxShadow: 'rgba(0,0,0,0.15) 0px 0px 0px 1px inset',
  border: '0',
  borderRadius: '2em',
  width: '100%',
  fontWeight: '700',
  fontFamily: 'Nunito Sans , Helvetica Neue , Helvetica , Arial , sans-serif',
  ':disabled': {
    filter: 'invert(75%)',
    cursor: 'not-allowed',
  },
  ':hover': {
    opacity: '0.8',
  },
  selectors: {
    '&:disabled:hover': {
      opacity: 'inherit',
    },
  },
});

export const btn = styleVariants({
  primary: {
    backgroundColor: '#1ea7fd',
    color: 'white',
  },
  secondary: {
    backgroundColor: 'transparent',
    color: '#333',
  },
});
