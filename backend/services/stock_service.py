import akshare as ak

def get_stock_data(stock_code):
    try:
        # 获取股票实时行情
        stock_data = ak.stock_zh_a_spot_em()
        # 获取个股信息
        stock_info = stock_data[stock_data['代码'] == stock_code].to_dict('records')[0]
        
        # 获取K线数据
        k_data = ak.stock_zh_a_hist(symbol=stock_code, period="daily")
        
        return {
            'basic_info': stock_info,
            'k_data': k_data.to_dict('records')
        }
    except Exception as e:
        return {'error': str(e)} 