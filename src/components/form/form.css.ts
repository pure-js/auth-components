import { style } from '@vanilla-extract/css';

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  gap: '3rem',
  boxSizing: 'border-box',
  margin: '0 auto',
  width: '100%',
  maxWidth: '20rem',
});
