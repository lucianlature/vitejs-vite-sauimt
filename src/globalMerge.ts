import { StyleRule, globalStyle } from '@vanilla-extract/css';
import merge from 'ts-deepmerge';

export default function globalMerge(
  selector: string,
  a: StyleRule,
  b: StyleRule
): void {
  globalStyle(selector, merge(a, b));
}
