import { Story, Meta } from '@storybook/react';
import ProgressBar, {ProgressBarProps} from '../app/components/ProgressBar/ProgressBar'

export default {
  title: 'Example/ProgressBar',
  component: ProgressBar,
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Primary = Template.bind({})
Primary.args = {
  title: 'javascript',
  theme: 'primary',
  progress: 50,
  width: 228,
}

export const Secondary = Template.bind({})
Secondary.args = {
  title: 'javascript',
  theme: 'secondary',
  progress: 50,
  width: 228,
}