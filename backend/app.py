from flask import Blueprint, Flask, request, jsonify
from flask_cors import CORS
from config import configDb
from login.login import login_bp
from crud.crud import crud_bp

app = Flask(__name__)
CORS(app)


#Login do usuário
app.register_blueprint(login_bp)

#CRUD do banco de dados
app.register_blueprint(crud_bp)




if __name__ == "__main__":
    app.run(host= '0.0.0.0', port=5000, debug=True)