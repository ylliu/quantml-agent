import React, { useState } from 'react';

function StockSelector({ onSelect }) {
  const [stockCode, setStockCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSelect(stockCode);
  };

  return (
    <div className="stock-selector">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={stockCode}
          onChange={(e) => setStockCode(e.target.value)}
          placeholder="输入股票代码（如：600000）"
        />
        <button type="submit">查询</button>
      </form>
    </div>
  );
}

export default StockSelector; 