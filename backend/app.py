from flask import Flask, jsonify, request
from flask_cors import CORS
from services.stock_service import get_stock_data
from services.report_service import get_report_summary
from services.news_service import get_news
from services.llm_service import analyze_content

app = Flask(__name__)
CORS(app)

@app.route('/api/stock/<stock_code>')
def stock_data(stock_code):
    data = get_stock_data(stock_code)
    return jsonify(data)

@app.route('/api/reports')
def reports():
    reports = get_report_summary()
    analysis = analyze_content(reports)
    return jsonify({
        'reports': reports,
        'analysis': analysis
    })

@app.route('/api/news')
def news():
    news_items = get_news()
    analysis = analyze_content(news_items)
    return jsonify({
        'news': news_items,
        'analysis': analysis
    })

if __name__ == '__main__':
    app.run(debug=True) 