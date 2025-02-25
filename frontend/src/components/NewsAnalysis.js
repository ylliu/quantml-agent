import React from 'react';

function NewsAnalysis({ data }) {
  return (
    <div className="news-analysis">
      {data.analysis && (
        <div className="analysis-summary">
          <p>{data.analysis}</p>
        </div>
      )}
      
      <div className="news-list">
        {data.news && data.news.map((item, index) => (
          <div className="news-item" key={index}>
            <h5 className="news-title">{item.title}</h5>
            <div className="news-meta">
              <span className="news-source">{item.source}</span>
              <span className="news-date">{item.date}</span>
            </div>
            <p className="news-summary">{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsAnalysis; 