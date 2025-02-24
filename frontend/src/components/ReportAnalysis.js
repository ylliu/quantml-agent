import React from 'react';

function ReportAnalysis({ data }) {
  return (
    <div className="report-analysis">
      <h2>研报分析</h2>
      <div className="reports">
        {data.reports.map((report, index) => (
          <div key={index} className="report-item">
            <h3>{report.title}</h3>
            <p>{report.summary}</p>
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

export default ReportAnalysis; 