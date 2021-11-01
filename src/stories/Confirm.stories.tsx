import { Story, Meta } from '@storybook/react';
import Confirm, {ConfirmProps} from '../components/Confirm/Confirm'

export default {
  title: 'Example/Confirm',
  component: Confirm,
} as Meta;

const Template: Story<ConfirmProps> = (args) => <Confirm {...args} />;

export const Default = Template.bind({})
Default.args = {
  question: 'Deseja realmente sair?'
}