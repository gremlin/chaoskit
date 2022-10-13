import { underline } from './text'

export const baseDefault = (theme) => ({
  color: theme.color.primary.base,

  '&:hover, &:focus': {
    color: theme.color.primary.dark,
  },
})

export const base = (theme) => ({
  color: `${theme.brand.secondaryBlue} !important`,

  '&:hover, &:focus': {
    color: `${theme.brand.secondaryBlue} !important`,
  },
})

export const reset = (theme) => ({
  color: `${theme.fontColor.base} !important`,

  '&:hover, &:focus': {
    color: `${theme.fontColor.base} !important`,
  },
})

export const muted = (theme) => ({
  color: `${theme.fontColor.muted} !important`,

  '&:hover, &:focus': {
    color: `${theme.fontColor.mutedDark} !important`,
  },
})

export const contrast = (theme) => ({
  color: `${theme.contrast.base} !important`,

  '&:hover, &:focus': {
    color: `${theme.contrast.base} !important`,
  },
})

export const linkUnderline = {
  '&:hover, &:focus': {
    ...underline,
  },
}
