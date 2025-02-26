import React, { useState, useEffect } from 'react';
import TabNavigation from './components/TabNavigation';
import MarketAnalysis from './components/MarketAnalysis';
import StockAnalysis from './components/StockAnalysis';
import ChatbotWidget from './components/ChatbotWidget';

function App() {
  const [activeTab, setActiveTab] = useState('market');
  const [selectedStock, setSelectedStock] = useState(null);
  const [stockData, setStockData] = useState(null);
  const [reports, setReports] = useState(null);
  const [news, setNews] = useState(null);

  useEffect(() => {
    // 获取研报数据
    fetch('http://localhost:5000/api/reports')
      .then(res => res.json())
      .then(data => setReports(data));
    
    // 获取新闻数据
    fetch('http://localhost:5000/api/news')
      .then(res => res.json())
      .then(data => setNews(data));
  }, []);

  useEffect(() => {
    if (selectedStock) {
      fetch(`http://localhost:5000/api/stock/${selectedStock}`)
        .then(res => res.json())
        .then(data => {
          setStockData(data);
          // 自动切换到个股分析标签页
          setActiveTab('stock');
        });
    }
  }, [selectedStock]);

  return (
    <div className="App">
      <header className="app-header">
        <h1>A股市场分析助手</h1>
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </header>
      
      <main className="app-content">
        {activeTab === 'market' ? (
          <MarketAnalysis reports={reports} news={news} />
        ) : (
          <StockAnalysis 
            selectedStock={selectedStock} 
            setSelectedStock={setSelectedStock} 
            stockData={stockData} 
          />
        )}
      </main>
      
      <ChatbotWidget />
      
      <footer className="app-footer">
        <p>© 2023 A股市场分析助手 | 数据来源: AKShare</p>
      </footer>
    </div>
  );
}

export default App; 