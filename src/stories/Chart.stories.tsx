import { Story, Meta } from '@storybook/react';
import Chart, {ChartProps} from '../app/components/Chart/Chart'

const data:Chart.ChartData = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Set', 'Out', 'Nov', 'Dez'],
  datasets: [
    {
      label: 'Receitas',
      data: [12, 19, 3, 5, 20, 13, 23, 15, 4, 18, 10, 8],
      fill: true,
      backgroundColor: '#0099FF',
      borderColor: '#0099FF',
      borderWidth: 0.5,
      yAxisID: 'vendas',
    },
    {
      label: 'Despesas',
      data: [1, 20, 13, 18, 5, 14, 15, 4, 18, 6, 9, 20],
      fill: true,
      backgroundColor: '#274060',
      borderColor: '#274060',
      borderWidth: 0.5,
      yAxisID: 'vendas',
    },
  ],
};

export default {
  title: 'Example/Chart',
  component: Chart,
} as Meta;

const Template: Story<ChartProps> = (args) => <Chart {...args} />;

export const Default = Template.bind({})
Default.args = {
  title: 'Média de performance nos últimos 12 meses',
  data
}

export const WithoutData = Template.bind({})
WithoutData.args = {}