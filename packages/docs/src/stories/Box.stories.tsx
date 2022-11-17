import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@jeanmrtns-ds/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <span>Box component</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
