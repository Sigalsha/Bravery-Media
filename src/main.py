#from Server.dbconnect.repository import repo
from Server.dbconnect.mysql_repository import repo
from Server.dbconnect.daos import *
from Server.dbconnect import imdb_conn

if __name__ == '__main__':
        # repo.create_tables()
        media = Media(123, "abc", "movie")
        # repo.media.insert(media)
        media = repo.media.find_by(id=123)
        movie = imdb_conn.search("The Pianist")
        x=0
