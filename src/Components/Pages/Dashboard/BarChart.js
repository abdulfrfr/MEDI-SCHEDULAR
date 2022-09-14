import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: '',
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Losses',
      data: [10, 30, 25, 12, 15, 8, 35, 45, 11],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor:'rgba(255, 99, 132, 0.5)',
      borderRadius: 10
    },
    {
      label: 'Gains',
      data: [25, 79, 30, 12, 10, 35, 55, 50, 10],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      borderColor:'rgba(53, 162, 235, 0.5)',
      borderRadius: 10
      
    },
  ],
};

 function BarChart() {
  return (
  <div className='w-[28rem]'>
    <Bar options={options} data={data} />
  </div>
  );
}


export default BarChart;