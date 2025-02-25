import React from 'react';
import ReactECharts from 'echarts-for-react';

function StockChart({ data }) {
  // 准备K线图数据
  const kLineData = data.k_data.map(item => [
    item.date,
    item.open,  // 开盘价
    item.close, // 收盘价
    item.low,   // 最低价
    item.high   // 最高价
  ]);

  // 成交量数据
  const volumeData = data.k_data.map(item => [
    item.date,
    item.volume, // 成交量
    item.close > item.open ? 1 : -1 // 1表示上涨，-1表示下跌
  ]);

  // 日期数据
  const dates = data.k_data.map(item => item.date);

  // 图表配置
  const option = {
    title: {
      text: `${data.basic_info.名称} (${data.basic_info.代码})`,
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      },
      formatter: function (params) {
        const data = params[0].data;
        return `
          <div>日期: ${data[0]}</div>
          <div>开盘: ${data[1]}</div>
          <div>收盘: ${data[2]}</div>
          <div>最低: ${data[3]}</div>
          <div>最高: ${data[4]}</div>
        `;
      }
    },
    legend: {
      data: ['K线', '成交量'],
      top: 30
    },
    grid: [
      {
        left: '10%',
        right: '10%',
        top: '15%',
        height: '55%'
      },
      {
        left: '10%',
        right: '10%',
        top: '75%',
        height: '15%'
      }
    ],
    xAxis: [
      {
        type: 'category',
        data: dates,
        scale: true,
        boundaryGap: false,
        axisLine: { onZero: false },
        splitLine: { show: false },
        splitNumber: 20,
        min: 'dataMin',
        max: 'dataMax'
      },
      {
        type: 'category',
        gridIndex: 1,
        data: dates,
        axisLabel: { show: false }
      }
    ],
    yAxis: [
      {
        scale: true,
        splitArea: {
          show: true
        }
      },
      {
        scale: true,
        gridIndex: 1,
        splitNumber: 2,
        axisLabel: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false }
      }
    ],
    dataZoom: [
      {
        type: 'inside',
        xAxisIndex: [0, 1],
        start: 50,
        end: 100
      },
      {
        show: true,
        xAxisIndex: [0, 1],
        type: 'slider',
        bottom: '5%',
        start: 50,
        end: 100
      }
    ],
    series: [
      {
        name: 'K线',
        type: 'candlestick',
        data: kLineData,
        itemStyle: {
          color: '#ef232a',
          color0: '#14b143',
          borderColor: '#ef232a',
          borderColor0: '#14b143'
        },
      },
      {
        name: '成交量',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: volumeData,
        itemStyle: {
          color: function(params) {
            return params.data[2] > 0 ? '#ef232a' : '#14b143';
          }
        }
      }
    ]
  };

  return (
    <div className="stock-chart">
      <div className="price-info">
        <div className="current-price">
          <span className="label">当前价:</span>
          <span className={`value ${parseFloat(data.basic_info.涨跌幅) >= 0 ? 'up' : 'down'}`}>
            {data.basic_info.最新价}
          </span>
        </div>
        <div className="price-change">
          <span className="label">涨跌幅:</span>
          <span className={`value ${parseFloat(data.basic_info.涨跌幅) >= 0 ? 'up' : 'down'}`}>
            {data.basic_info.涨跌幅}%
          </span>
        </div>
      </div>
      <ReactECharts 
        option={option} 
        style={{ height: '500px', width: '100%' }}
        notMerge={true}
        lazyUpdate={true}
      />
    </div>
  );
}

export default StockChart; 