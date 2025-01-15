// src/components/SalesChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { SalesData } from '../types';
import './SalesChart.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

interface SalesChartProps {
  sales: SalesData[];
}

const SalesChart: React.FC<SalesChartProps> = ({ sales }) => {
  const labels = sales.map((entry) => entry.weekEnding);
  const retailSales = sales.map((entry) => entry.retailSales);
  const wholesaleSales = sales.map((entry) => entry.wholesaleSales);

  const data = {
    labels,
    datasets: [
      {
        label: 'Retail Sales',
        data: retailSales,
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
      },
      {
        label: 'Wholesale Sales',
        data: wholesaleSales,
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.1)',
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <div className="sales-chart">
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesChart;
