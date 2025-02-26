import React from 'react';
import ReactECharts from 'echarts-for-react';

function MarketPrediction() {
  // 市场情绪指标数据
  const sentimentData = {
    bullish: 65, // 看多情绪
    bearish: 35, // 看空情绪
    neutral: 15, // 中性情绪
    fear: 42,    // 恐慌指数
    greed: 58    // 贪婪指数
  };

  // 市场预测数据
  const predictionData = {
    shortTerm: 'bullish',  // 短期预测：看多
    midTerm: 'neutral',    // 中期预测：中性
    longTerm: 'bearish'    // 长期预测：看空
  };

  // 热点板块预测
  const sectorPredictions = [
    { name: '科技', score: 85 },
    { name: '医药', score: 72 },
    { name: '新能源', score: 68 },
    { name: '金融', score: 45 },
    { name: '消费', score: 62 }
  ];

  // 情绪仪表盘配置
  const sentimentOption = {
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '75%'],
        radius: '90%',
        min: 0,
        max: 100,
        splitNumber: 10,
        axisLine: {
          lineStyle: {
            width: 6,
            color: [
              [0.3, '#ff4d4f'],
              [0.7, '#faad14'],
              [1, '#52c41a']
            ]
          }
        },
        pointer: {
          icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
          length: '12%',
          width: 20,
          offsetCenter: [0, '-60%'],
          itemStyle: {
            color: 'auto'
          }
        },
        axisTick: {
          length: 12,
          lineStyle: {
            color: 'auto',
            width: 2
          }
        },
        splitLine: {
          length: 20,
          lineStyle: {
            color: 'auto',
            width: 5
          }
        },
        axisLabel: {
          color: '#464646',
          fontSize: 12,
          distance: -60,
          formatter: function (value) {
            if (value === 0) {
              return '极度恐慌';
            } else if (value === 50) {
              return '中性';
            } else if (value === 100) {
              return '极度贪婪';
            }
            return '';
          }
        },
        title: {
          offsetCenter: [0, '-20%'],
          fontSize: 20
        },
        detail: {
          fontSize: 30,
          offsetCenter: [0, '0%'],
          valueAnimation: true,
          formatter: function (value) {
            return Math.round(value) + '';
          },
          color: 'auto'
        },
        data: [
          {
            value: sentimentData.greed,
            name: '市场情绪指数'
          }
        ]
      }
    ]
  };

  // 热点板块预测配置
  const sectorOption = {
    title: {
      text: '热点板块预测',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'normal'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      max: 100,
      axisLabel: {
        formatter: '{value}分'
      }
    },
    yAxis: {
      type: 'category',
      data: sectorPredictions.map(item => item.name),
      axisLine: {
        lineStyle: {
          color: '#ddd'
        }
      },
      axisTick: {
        show: false
      }
    },
    series: [
      {
        name: '看好程度',
        type: 'bar',
        data: sectorPredictions.map(item => item.score),
        itemStyle: {
          color: function(params) {
            // 根据分数设置不同颜色
            const score = params.value;
            if (score >= 70) return '#52c41a';
            if (score >= 50) return '#faad14';
            return '#ff4d4f';
          },
          borderRadius: [0, 4, 4, 0]
        },
        label: {
          show: true,
          position: 'right',
          formatter: '{c}分'
        }
      }
    ]
  };

  return (
    <div className="market-prediction">
      <h3 className="section-subtitle">市场预测</h3>
      
      <div className="prediction-grid">
        <div className="prediction-card sentiment-gauge">
          <ReactECharts 
            option={sentimentOption} 
            style={{ height: '300px' }}
          />
        </div>
        
        <div className="prediction-card term-prediction">
          <h4>趋势预测</h4>
          <div className="prediction-terms">
            <div className="term-item">
              <span className="term-label">短期(1周)</span>
              <span className={`term-value ${predictionData.shortTerm}`}>
                {predictionData.shortTerm === 'bullish' ? '看多 ↑' : 
                 predictionData.shortTerm === 'bearish' ? '看空 ↓' : '中性 →'}
              </span>
            </div>
            <div className="term-item">
              <span className="term-label">中期(1月)</span>
              <span className={`term-value ${predictionData.midTerm}`}>
                {predictionData.midTerm === 'bullish' ? '看多 ↑' : 
                 predictionData.midTerm === 'bearish' ? '看空 ↓' : '中性 →'}
              </span>
            </div>
            <div className="term-item">
              <span className="term-label">长期(3月)</span>
              <span className={`term-value ${predictionData.longTerm}`}>
                {predictionData.longTerm === 'bullish' ? '看多 ↑' : 
                 predictionData.longTerm === 'bearish' ? '看空 ↓' : '中性 →'}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="sector-prediction">
        <ReactECharts 
          option={sectorOption} 
          style={{ height: '300px' }}
        />
      </div>
    </div>
  );
}

export default MarketPrediction; 