import React from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      display: false,
    },
    title: {
      display: false,
      text: '',
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr'];

const data = {
  labels,
  datasets: [
    {
      label: 'Losses',
      data: [100, 15, 25, 40],
      backgroundColor:['orange', 'blue', 'purple', 'green'],
      borderColor:['orange', 'blue', 'purple', 'green'],
      borderWidth:[1,1,20,1],
      width:[100, 30, 30, 30],
      borderRadius: 0,
    }
  ],
};

 function BarChart() {
  return (
  <div className='w-[15rem] flex justify-center items-center'>
    <Doughnut  data={data} options={options}/>
  </div>
  );
}


export default BarChart;