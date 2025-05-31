import { style, styleVariants } from '@vanilla-extract/css';

export const inputBase = style({
  transition: 'border 0.3s',
  boxSizing: 'border-box',
  outline: 'none',
  border: '1px solid #e1e7ea',
  borderRadius: '30px',
  padding: '17px 24px',
  width: '100%',
  fontSize: '1rem',
  ':focus': {
    border: '1px solid #9ba1a5',
  },
});

export const invalidTxt = style({
  padding: '3px 10px 0 25px',
  color: 'red',
});

export const label = style({
  transition: 'color 0.3s',
  boxSizing: 'border-box',
  width: '100%',
  color: 'rgba(178,176,183,0.8)',
  ':focus-within': {
    color: '#9ba1a5',
  },
});

export const labelTxt = style({
  position: 'relative',
  bottom: '-0.4rem',
  background: '#fff',
  padding: '0 10px 0 25px',
  fontSize: '0.9rem',
});

export const invalid = style({
  border: '1px solid #ff7c7c',
  ':focus': {
    border: '1px solid red',
  },
});

export const inputSize = styleVariants({
  sm: {
    padding: '12px 18px',
    selectors: {
      [`${labelTxt} &`]: {
        bottom: '-0.4rem',
        padding: '0 10px 0 19px',
      },
    },
  },
  md: {
    padding: '17px 24px',
    selectors: {
      [`${labelTxt} &`]: {
        bottom: '-0.4rem',
        padding: '0 10px 0 25px',
      },
    },
  },
  lg: {
    padding: '23px 32px',
    selectors: {
      [`${labelTxt} &`]: {
        bottom: '-0.4rem',
        padding: '0 10px 0 33px',
      },
    },
  },
});
