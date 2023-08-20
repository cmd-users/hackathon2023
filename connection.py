import psycopg2

class Connection:

    def __init__(self, host = "admin", user = "admin", password = "admin123", database = "hackathonQUERO"):
        self.host = host
        self.user = user
        self.password = password
        self.database = database

    def get_connection(self):
        connection = psycopg2.connect(
            host=self.host,
            user=self.user,
            password=self.password,
            dbname=self.database
        )
        return connection
