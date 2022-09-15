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

const options = {
  responsive: true,
  
  plugins: {
    legend: {
      display:false
    },
    title: {
      display: false
    },
  },
  barPercentage: 0.1,
  scales: {
    x:{
      grid: {
        display: false
      }
    },
    y:{
      
    }
    
}};

const labels = ['Jan', 'Feb',  'Mar',  'Apr',  'May', 'Jun', 'Jul', 'Aug', 'Sep'];

const data = {
  labels,
  datasets: [
    {

      data: [10, 30, 25, 12, 15, 8, 35, 25, 40],
      backgroundColor: '#FF0000',
      borderColor:'white',
      borderRadius: 10,
      barThickness: 10
    },
    {

      data: [25, 79, 30, 12, 10, 35, 55, 60, 80],
      backgroundColor:'#BC3FBC',
      borderColor:'white',
      borderRadius: 10,
      barThickness: 10
      
    },
  ],
};

 function BarChart() {
  return (
  <div className=' '>
    <Bar  data={data} width={8} height={2} options={options}/>
  </div>
  );
}


export default BarChart;