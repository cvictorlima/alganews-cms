import { Story, Meta } from '@storybook/react';
import ErrorDisplay, {ErrorDisplayProps} from '../app/components/ErrorDisplay'

export default {
  title: 'Example/ErrorDisplay',
  component: ErrorDisplay,
  argTypes: {
    onLogout: {
      action: 'logout'
    }
  }
} as Meta;

const Template: Story<ErrorDisplayProps> = (args) => <ErrorDisplay {...args} />;

export const Default = Template.bind({})
Default.args = {
  small: false
}

export const CustomMessage = Template.bind({})
CustomMessage.args = {
  title: 'Erro ao renderizar componente',
  description: 'Código de erro que seja identificável pelo time de desenvolvimento',
  small: false
}

export const CustomTitle = Template.bind({})
CustomTitle.args = {
  title: 'Xablau',
  small: false
}

export const Small = Template.bind({})
Small.args = {
  small: true
}

