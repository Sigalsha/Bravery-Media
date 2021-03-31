from Server.dbconnect.repository import repo
from Server.dbconnect.daos import *
from Server.dbconnect.books import google_books_conn as gbc

if __name__ == '__main__':
    repo.create_tables()
    gbc.search_by_keyword("polanski")
