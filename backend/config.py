import os
from dotenv import load_dotenv

# 加载环境变量
load_dotenv()

class Config:
    # OpenAI配置
    OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
    
    # 数据库配置
    DATABASE_URL = os.getenv('DATABASE_URL')
    
    # Flask配置
    DEBUG = os.getenv('FLASK_DEBUG', True)
    ENV = os.getenv('FLASK_ENV', 'development') 