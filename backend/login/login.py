from flask import Blueprint, Flask, request, jsonify
from flask_cors import CORS
from config import configDb
import mysql.connector
import hashlib
from banco.banco import get_connection, close_connection

login_bp = Blueprint('login', __name__)

@login_bp.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    usuario = data['usuario']
    senha = data['senha']

    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM users WHERE usuario = %s', (usuario, ))
    user_data = cursor.fetchone()
    close_connection(conn)

    if user_data:
        stored_hash = user_data['senha']
        hashed_senha = hashlib.sha256(senha.encode('utf-8')).hexdigest()

        if hashed_senha == stored_hash:
            return jsonify({'status': 'ok', 'usuario': {'id': user_data['id'], 'usuario': user_data}}), 200
        else:
            return jsonify({'status': 'error', 'message': 'Usuário ou senha incorretos'}), 401
    else:
        return jsonify({'status': 'error', 'message': 'Usuário ou senha incorretos'}), 401