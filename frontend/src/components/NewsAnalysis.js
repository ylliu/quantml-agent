import React from 'react';

function NewsAnalysis({ data }) {
  return (
    <div className="news-analysis">
      <h2>新闻分析</h2>
      <div className="news">
        {data.news.map((item, index) => (
          <div key={index} className="news-item">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      <div className="analysis">
        <h3>AI分析见解</h3>
        <p>{data.analysis}</p>
      </div>
    </div>
  );
}

export default NewsAnalysis; 