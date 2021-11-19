import Chart from "../components/Chart/Chart";

const FAKE_DATA:Chart.ChartData = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
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

export default function UserPerformance () {
  
  return <Chart 
  title= "Média de performance nos últimos 12 meses"
  data = {FAKE_DATA}
/>
}