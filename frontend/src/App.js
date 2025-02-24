import React, { useState, useEffect } from 'react';
import StockSelector from './components/StockSelector';
import StockChart from './components/StockChart';
import ReportAnalysis from './components/ReportAnalysis';
import NewsAnalysis from './components/NewsAnalysis';

function App() {
  const [selectedStock, setSelectedStock] = useState(null);
  const [stockData, setStockData] = useState(null);
  const [reports, setReports] = useState(null);
  const [news, setNews] = useState(null);

  useEffect(() => {
    if (selectedStock) {
      fetch(`http://localhost:5000/api/stock/${selectedStock}`)
        .then(res => res.json())
        .then(data => setStockData(data));
    }
    
    // 获取研报数据
    fetch('http://localhost:5000/api/reports')
      .then(res => res.json())
      .then(data => setReports(data));
    
    // 获取新闻数据
    fetch('http://localhost:5000/api/news')
      .then(res => res.json())
      .then(data => setNews(data));
  }, [selectedStock]);

  return (
    <div className="App">
      <header>
        <h1>A股市场分析助手</h1>
      </header>
      
      <main>
        <div className="stock-section">
          <StockSelector onSelect={setSelectedStock} />
          {stockData && <StockChart data={stockData} />}
        </div>
        
        <div className="analysis-section">
          {reports && <ReportAnalysis data={reports} />}
          {news && <NewsAnalysis data={news} />}
        </div>
      </main>
    </div>
  );
}

export default App; 