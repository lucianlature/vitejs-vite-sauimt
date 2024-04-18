import { style } from '@vanilla-extract/css';
import { assignVars, createThemeContract } from '@vanilla-extract/css';
import globalMerge from './globalMerge';

export const main = style({
  textAlign: 'var(--test2)',
  color: 'var(--test)',
});

const contract = createThemeContract({ 'var(--test)': null });

globalMerge(
  main,
  {
    vars: assignVars(contract, { 'var(--test)': 'gold' }),
  },
  {
    vars: {
      'var(--test2)': 'center',
    },
  }
);
