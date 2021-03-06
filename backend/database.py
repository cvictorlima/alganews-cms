import os

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

db_username = os.getenv('DB_USERNAME', 'postgres')
db_password = os.getenv('DB_PASSWORD', '123456')
db_host = os.getenv('DB_HOST', 'localhost')
db_port = os.getenv ('DB_PORT', '5432')
db_name = os.getenv ('DB_NAME', 'test')

SQLALCHEMY_DATABASE_URL = f'postgresql://{db_username}:{db_password}@{db_host}:{db_port}/{db_name}'

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit= False, autoflush= False, bind=engine)

Base = declarative_base()