import {
  Box,
  CheckBox,
  CheckBoxProps,
  Text,
} from '@joaoalberto-design-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/CheckBox',
  component: CheckBox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'row',
            gap: '$2',
          }}
        >
          {Story()}
          <Text>Accept terms of users</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckBoxProps>

export const Primary: StoryObj<CheckBoxProps> = {}
