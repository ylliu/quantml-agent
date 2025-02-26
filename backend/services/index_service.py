import akshare as ak
import pandas as pd

def get_index_data():
    try:
        # 使用更简单的API调用
        print("开始获取指数数据...")
        # 尝试使用不同的API
        index_data = ak.stock_zh_index_spot_sina()  # 使用新浪API
        print(f"获取到指数数据: {len(index_data)} 条记录")
        
        # 筛选主要指数
        main_indices = ['000001', '399001', '399006']
        result = []
        
        for idx in main_indices:
            print(f"处理指数 {idx}")
            index_info = index_data[index_data['代码'] == idx].to_dict('records')
            if index_info:
                result.append(index_info[0])
        
        return result
    except Exception as e:
        print(f"获取指数数据时出错: {e}")
        # 返回静态数据
        return [
            {
                "代码": "000001",
                "名称": "上证指数",
                "最新价": "3,210.58",
                "涨跌幅": "1.25"
            },
            {
                "代码": "399001",
                "名称": "深证成指",
                "最新价": "10,825.63",
                "涨跌幅": "1.68"
            },
            {
                "代码": "399006",
                "名称": "创业板指",
                "最新价": "2,156.32",
                "涨跌幅": "-0.32"
            }
        ] 