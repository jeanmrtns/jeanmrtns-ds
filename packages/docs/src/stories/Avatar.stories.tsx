import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@jeanmrtns-ds/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/jeanmrtns.png',
    alt: 'Jean Martins',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: '',
  },
}
