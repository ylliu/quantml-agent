import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// 注册 ChartJS 组件
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function StockChart({ data }) {
  const chartData = {
    labels: data.k_data.map(item => item.date),
    datasets: [
      {
        label: '收盘价',
        data: data.k_data.map(item => item.close),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  return (
    <div className="stock-chart">
      <h2>{data.basic_info.名称} ({data.basic_info.代码})</h2>
      <div className="price-info">
        <p>当前价: {data.basic_info.最新价}</p>
        <p>涨跌幅: {data.basic_info.涨跌幅}%</p>
      </div>
      <Line data={chartData} />
    </div>
  );
}

export default StockChart; 