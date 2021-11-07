import { Story, Meta } from '@storybook/react';
import CircleChart, {CircleChartProps} from '../components/CircleChart'

export default {
  title: 'Example/CircleChart',
  component: CircleChart,
  argTypes: {
    progress:{
      control:{
        type: 'range',
        min: 0,
        max: 100
      }
    }
  }
} as Meta;

const Template: Story<CircleChartProps> = (args) => <CircleChart {...args} />;

export const Default = Template.bind({})
Default.args = {
  size: 150,
  progress: 80,
  strokeWidth: 2,
}