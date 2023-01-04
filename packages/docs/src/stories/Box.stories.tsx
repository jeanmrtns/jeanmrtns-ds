import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@jeanmrtns-ds/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text>Box component</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
