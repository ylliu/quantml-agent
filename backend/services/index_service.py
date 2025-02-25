import akshare as ak

def get_index_data():
    try:
        # 获取A股指数实时行情
        index_data = ak.stock_zh_index_spot_em(symbol="沪深重要指数")
        
        # 筛选主要指数：上证指数、深证成指、创业板指
        main_indices = ['000001', '399001', '399006']
        main_name = ['上证指数', '深证成指', '创业板指']
        result = []
        
        for idx in main_name:
            index_info = index_data[index_data['名称'] == idx].to_dict('records')
            # index_info = ak.stock_bid_ask_em(symbol=idx)
            if index_info:
                result.append(index_info[0])
        
        return result
    except Exception as e:
        print(f"Error fetching index data: {e}")
        # 返回空数组而不是错误对象
        return [] 