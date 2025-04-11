from flask import Blueprint, Flask, request, jsonify
from flask_cors import CORS
from config import configDb
from banco.banco import get_connection, close_connection



crud_bp = Blueprint('crud', __name__)

@crud_bp.route('/api/list_estoque', methods=['GET'])
def list_estoque():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM estoque')
    result = cursor.fetchall()
    close_connection(conn)
    return jsonify(result)


@crud_bp.route('/api/list_produto/<int:id>', methods=['GET'])
def list_produto(id):
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM estoque WHERE id = %s', (id,))
    result = cursor.fetchone()
    close_connection(conn)
    return jsonify(result)


@crud_bp.route('/api/cadastrar_estoque', methods=['POST'])
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


@crud_bp.route('/api/alterar_produto', methods=['PUT'])  # Usamos PUT para atualizações
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

@crud_bp.route('/api/deletar_produto/<int:id>', methods=['DELETE'])  # Usamos PUT para atualizações
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
        

