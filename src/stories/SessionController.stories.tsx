import { Story, Meta } from '@storybook/react';
import SessionController, {SessionControllerProps} from '../components/SessionController'

export default {
  title: 'Example/SessionController',
  component: SessionController,
  argTypes: {
    onLogout: {
      action: 'logout'
    }
  }
} as Meta;

const Template: Story<SessionControllerProps> = (args) => <SessionController {...args} />;

export const Default = Template.bind({})
Default.args = {
  name: 'Logan Marinho Lima',
  description: 'Dog desde sempre'
  
}