import { ComponentStory, ComponentMeta } from '@storybook/react';

import ValueDescriptor, {ValueDescriptorProps} from '../app/components/ValueDescriptor/ValueDescriptor'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ValueDescriptor',
  component: ValueDescriptor,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ValueDescriptor>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ValueDescriptor> = (args) => <ValueDescriptor {...args} />;

export const Default = Template.bind({})
Default.args = {
  color: 'default',
  value: 506302.02,
  description: 'ganhos do mês:',
  isCurrency: false
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  value: 506302.02,
  description: 'ganhos do mês:',
  isCurrency: false
}

export const DefaultCurrency = Template.bind({})
DefaultCurrency.args = {
  color: 'default',
  value: 506302.02,
  description: 'ganhos do mês:',
  isCurrency: true
}

export const PrimaryCurrency = Template.bind({})
PrimaryCurrency.args = {
  color: 'primary',
  value: 506302.02,
  description: 'ganhos do mês:',
  isCurrency: true
}