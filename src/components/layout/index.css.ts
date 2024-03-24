import { style } from '@vanilla-extract/css';

export const container = style({
  paddingRight: 'max(env(safe-area-inset-right, 1rem), 1rem)',
  paddingLeft: 'max(env(safe-area-inset-left, 1rem), 1rem)',
});
