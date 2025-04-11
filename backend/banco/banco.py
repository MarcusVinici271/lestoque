from flask import Blueprint, Flask, request, jsonify
from flask_cors import CORS
from config import configDb
import mysql.connector


def get_connection():
    try:
        conn = mysql.connector.connect(
            host=configDb['host'],
            user=configDb['user'],
            password=configDb['password'],
            database=configDb['database']
        )
        return conn
    except Exception as e:
        print(e)
        return None 
    
def close_connection(conn):
    conn.close()