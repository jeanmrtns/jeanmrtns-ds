import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@jeanmrtns-ds/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni quaerat sequi minima! In quia placeat aliquid minus quam voluptates perspiciatis porro, facere repudiandae recusandae quas optio ab consectetur ullam consequuntur.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
