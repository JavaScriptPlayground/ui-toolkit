import type { ObjectKeys } from '../../types/index.ts';

export const buttonTypes = {
  PRIMARY: 'primary',
  DEFAULT: 'default',
  INVISIBLE: 'invisible',
  DANGER: 'danger'
} as const;

export type ButtonType = ObjectKeys<typeof buttonTypes>;
