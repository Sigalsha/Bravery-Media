from Server.dbconnect.repository import repo
from Server.dbconnect.daos import *

if __name__ == '__main__':
        repo.create_tables()
        media = Media(123, "abc", "movie")
        repo.media.insert(media)
