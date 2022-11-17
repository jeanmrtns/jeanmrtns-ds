import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  fonts,
  radii,
  fontSizes,
  fontWeights,
  lineHeights,
  space,
} from '@jeanmrtns-ds/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
  },
})
