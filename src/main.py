from Server.dbconnect.repository import repo
from Server.dbconnect.daos import *
from Server.dbconnect import imdb_conn

if __name__ == '__main__':
         repo.create_tables()
        # media = Media(123, "abc", "movie")
        # repo.media.insert(media)
        # repo.braveryMoment.insert(BraveryMoment(1, 123, 57))
        # repo.braveryMoment.insert(BraveryMoment(2, 123, 1212))
        # repo.braveryMoment.insert(BraveryMoment(3, 123, 77))
        # repo.braveryMoment.insert(BraveryMoment(4, 123, 4))
        # moments = repo.braveryMoment.find_by(media_id=123)
        # mlist = []
        # for m in moments:
        #         mlist.append(m.start)
        #
        # media = repo.media.find_by(id=123)
        # movie = imdb_conn.search("The Pianist")
