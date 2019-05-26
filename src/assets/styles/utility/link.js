import { underline } from './text';

export const base = theme => ({
  color: theme.color.primary.base,

  '&:hover, &:focus': {
    color: theme.color.primary.dark,
  },
});

export const reset = theme => ({
  color: theme.fontColor.base,

  '&:hover, &:focus': {
    color: theme.fontColor.dark,
  },
});

export const muted = theme => ({
  color: theme.fontColor.muted,

  '&:hover, &:focus': {
    color: theme.fontColor.mutedDark,
  },
});

export const heading = theme => ({
  color: theme.fontColor.heading,

  '&:hover, &:focus': {
    color: theme.fontColor.headingDark,
  },
});

export const linkUnderline = {
  '&:hover, &:focus': {
    ...underline,
  },
};
