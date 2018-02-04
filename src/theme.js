import { shade, tint } from 'polished';

export const breakpoints = [
  32,
  48,
  64,
  80
]

export const space = [
  0,
  4,
  8,
  16,
  24,
  32,
  48,
  64,
  96,
  128,
]

export const fontSizes = [
  12,
  14,
  16,
  20,
  24,
  32,
  48,
  64,
  72,
  96
]

export const weights = [
  400,
  600
]

const defaultColors = {
  navy: '#001F3F',
  blue: '#0074D9',
  aqua: '#7FDBFF',
  teal: '#39CCCC',
  olive: '#3D9970',
  green: '#2ECC40',
  lime: '#01FF70',
  yellow: '#FFDC00',
  orange: '#FF851B',
  red: '#FF4136',
  maroon: '#85144B',
  fuchsia: '#F012BE',
  purple: '#B10DC9',
  black: '#111111',
  gray: '#AAAAAA',
  silver: '#DDDDDD',
  white: '#FFFFFF'
}

const brand = {
  white: defaultColors.white,
  black: defaultColors.black,
  red: defaultColors.red,
  yellow: defaultColors.yellow,
  green: defaultColors.green,
  teal: defaultColors.teal,
  blue: defaultColors.blue,
  purple: defaultColors.purple
}

export const colors = {
  n900: brand.black,
  n800: tint(0.9, brand.black),
  n700: tint(0.85, brand.black),
  n600: tint(0.75, brand.black),
  n500: tint(0.7, brand.black),
  n400: tint(0.675, brand.black),
  n300: tint(0.65, brand.black),
  n200: tint(0.6, brand.black),
  n100: tint(0.5, brand.black),
  n90: tint(0.45, brand.black),
  n80: tint(0.4, brand.black),
  n70: tint(0.35, brand.black),
  n60: tint(0.25, brand.black),
  n50: tint(0.2, brand.black),
  n40: tint(0.15, brand.black),
  n30: tint(0.1, brand.black),
  n20: tint(0.05, brand.black),
  n10: tint(0.025, brand.black),
  n0: brand.white,
  r500: shade(0.75, brand.red),
  r400: shade(0.875, brand.red),
  r300: brand.red,
  r200: tint(0.75, brand.red),
  r100: tint(0.5, brand.red),
  r75: tint(0.25, brand.red),
  r50: tint(0.125, brand.red),
  y500: shade(0.75, brand.yellow),
  y400: shade(0.875, brand.yellow),
  y300: brand.yellow,
  y200: tint(0.75, brand.yellow),
  y100: tint(0.5, brand.yellow),
  y75: tint(0.25, brand.yellow),
  y50: tint(0.125, brand.yellow),
  g500: shade(0.75, brand.green),
  g400: shade(0.875, brand.green),
  g300: brand.green,
  g200: tint(0.75, brand.green),
  g100: tint(0.5, brand.green),
  g75: tint(0.25, brand.green),
  g50: tint(0.125, brand.green),
  t500: shade(0.75, brand.teal),
  t400: shade(0.875, brand.teal),
  t300: brand.teal,
  t200: tint(0.75, brand.teal),
  t100: tint(0.5, brand.teal),
  t75: tint(0.25, brand.teal),
  t50: tint(0.125, brand.teal),
  b500: shade(0.75, brand.blue),
  b400: shade(0.875, brand.blue),
  b300: brand.blue,
  b200: tint(0.75, brand.blue),
  b100: tint(0.5, brand.blue),
  b75: tint(0.25, brand.blue),
  b50: tint(0.125, brand.blue),
  p500: shade(0.75, brand.purple),
  p400: shade(0.875, brand.purple),
  p300: brand.purple,
  p200: tint(0.75, brand.purple),
  p100: tint(0.5, brand.purple),
  p75: tint(0.25, brand.purple),
  p50: tint(0.125, brand.purple)
}

export const intents = {
  default: colors.n50,
  primary: colors.b300,
  secondary: colors.n100,
  success: colors.g300,
  warning: colors.y300,
  danger: colors.r300
}

export const radius = 4
export const font = `-apple-system, BlinkMacSystemFont, sans-serif`
export const monospace = '"SF Mono", "Roboto Mono", Menlo, monospace'

export const zIndex = {
  modal: '500'
}

export default {
  breakpoints,
  space,
  fontSizes,
  weights,
  font,
  monospace,
  colors,
  intents,
  radius,
  zIndex
}