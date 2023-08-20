from flask import Flask, jsonify, request
from flask_cors import CORS

from DAOS.questionsDAO import QuestionsDAO

app = Flask(__name__)
CORS(app)

DAOquest = QuestionsDAO()

# @app.route('/register',methods=['GET'])
# def nomes_clientes():
#     #rota aqui

@app.route('/quiz/next/<int:ID_aluno>',methods=['GET'])
def nomes_clientes(ID_aluno):
    DAOquest.nextQuest(ID_aluno)

# @app.route('/quiz/next',methods=['GET'])
# def nomes_clientes():
    #rota aqui
    
# @app.route('/class_create',methods=['GET'])
# def nomes_clientes():
#     #rota aqui

# @app.route('/calss_join',methods=['GET'])
# def nomes_clientes():
#     #rota aqui

app.run(port=5000,host='localhost',debug=True)

