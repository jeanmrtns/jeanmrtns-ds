import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@jeanmrtns-ds/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Custom Title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, Heading always will be a `h2` but can be modified with `as` prop',
      },
    },
  },
}
