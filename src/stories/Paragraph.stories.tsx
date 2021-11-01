import { Story, Meta } from '@storybook/react';
import Paragraph, {ParagraphProps} from '../components/Typography/Paragraph'

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({})
Default.args = {
  size: 'default',
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, modi nostrum tempora expedita soluta corporis unde sunt laborum perferendis odio.'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, modi nostrum tempora expedita soluta corporis unde sunt laborum perferendis odio.'
}