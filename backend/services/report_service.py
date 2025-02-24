import requests
from bs4 import BeautifulSoup
import re

def get_report_summary():
    try:
        # 东方财富研报页面URL
        url = "http://data.eastmoney.com/report/"
        
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        
        response = requests.get(url, headers=headers)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        reports = []
        # 根据实际DOM结构解析研报数据
        report_items = soup.find_all('div', class_='report-item')
        
        for item in report_items[:10]:  # 获取前10条研报
            title = item.find('h3').text
            summary = item.find('p', class_='summary').text
            reports.append({
                'title': title,
                'summary': summary
            })
            
        return reports
    except Exception as e:
        return {'error': str(e)} 