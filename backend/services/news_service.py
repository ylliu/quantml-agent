import requests
from bs4 import BeautifulSoup

def get_news():
    try:
        # 新浪财经新闻页面
        url = "https://finance.sina.com.cn/stock/"
        
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        
        response = requests.get(url, headers=headers)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        news_items = []
        # 根据实际DOM结构解析新闻数据
        news_list = soup.find_all('div', class_='news-item')
        
        for item in news_list[:10]:  # 获取前10条新闻
            title = item.find('h2').text
            content = item.find('p').text
            news_items.append({
                'title': title,
                'content': content
            })
            
        return news_items
    except Exception as e:
        return {'error': str(e)} 