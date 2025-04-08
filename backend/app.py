from flask import Flask, request, jsonify
from flask_cors import CORS
from config import configDb
import mysql.connector
import hashlib

app = Flask(__name__)
CORS(app)

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

@app.route('/api/list_estoque', methods=['GET'])
def list_estoque():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM estoque')
    result = cursor.fetchall()
    close_connection(conn)
    return jsonify(result)


@app.route('/api/list_produto/<int:id>', methods=['GET'])
def list_produto(id):
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM estoque WHERE id = %s', (id,))
    result = cursor.fetchone()
    close_connection(conn)
    return jsonify(result)


@app.route('/api/cadastrar_estoque', methods=['POST'])
def cadastrar_estoque():
        data = request.get_json()  
        produto = data['produto']
        quantidade = data['quantidade']
        serial = data['serial']
        descricao = data['descricao']

        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute(
            'INSERT INTO estoque (produto, quantidade, serial, descricao) VALUES (%s, %s, %s, %s)', 
            (produto, quantidade, serial, descricao),)
        conn.commit()
        close_connection(conn)

        return jsonify({'status': 'ok'})


@app.route('/api/alterar_produto', methods=['PUT'])  # Usamos PUT para atualizações
def alterar_produto():    
        data = request.get_json()
        id = data['id']
        produto = data['produto']
        quantidade = data['quantidade']
        serial = data['serial']
        descricao = data['descricao']
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute(
            'UPDATE estoque SET produto = %s, quantidade = %s, serial = %s, descricao = %s WHERE id = %s',
            (produto, quantidade, serial, descricao, id)  # Adicionamos o ID na tupla
        )
        conn.commit()
        close_connection(conn)

        return jsonify({'status': 'ok'})

@app.route('/api/deletar_produto/<int:id>', methods=['DELETE'])  # Usamos PUT para atualizações
def deletar_produto(id):   
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute(
            'DELETE FROM estoque WHERE id = %s', (id,))
        conn.commit()
        close_connection(conn)
        if cursor.rowcount > 0:
            return jsonify({'status': 'ok', 'message': 'Produto deletado com sucesso'})
        else:
            return jsonify({'status': 'error', 'message': 'Produto não encontrado'}), 404

@app.route('/api/login', methods=['POST'])
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





if __name__ == "__main__":
    app.run(host= '0.0.0.0', port=5000, debug=True)