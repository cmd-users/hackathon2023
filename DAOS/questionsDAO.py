from connection import Connection
import psycopg2

class QuestionsDAO:
    conexao = Connection(host="localhost", user="admin", password="admin123", database="ClientInformation")
    conn = conexao.get_connection()

    def nextQuest(self, ID_aluno):
        result = []
        result.clear()
        try:
            # Query SQL para buscar os registros na tabela com filtros opcionais
            sql_select_query = "SELECT * FROM answer WHERE id_aluno = %s"

            cursor = self.conn.cursor()
            cursor.execute(sql_select_query, (ID_aluno,))
            result = cursor.fetchall()

            cursor.close()
            self.conn.close()

            return len(result)

        except psycopg2.Error as error:
            print(f"Erro ao conectar ou buscar dados no banco de dados: {error}")
