from Server.dbconnect.dtos import Review, User, Media, BraveryMoment
from Server.dbconnect.dbconfig import dbvalues


# TODO remove if not used later
def _limit_media_results(lst):
    if len(lst) > dbvalues["media_limit"]:
        return lst[:50]


class _Reviews:
    def __init__(self, curr):
        self._curr = curr

    def insert(self, review):
        self._curr.execute("""
        INSERT INTO reviews (media_id, date, rating, review, reviewer) VALUES (%s, %s, %s, %s)
        """, list(vars(review).values())[1:])

    def find_by(self, **keyvals):
        column_names = keyvals.keys()
        params = keyvals.values()

        stmt = 'SELECT * FROM reviews WHERE {}'.format(' AND '.join([col + '=%s' for col in column_names]))

        c = self._curr
        c.execute(stmt, list(params))
        return [Review(*row[1:], row[0]) for row in c.fetchall()]

    def delete(self, id):
        self._curr.execute("""
                DELETE FROM reviews WHERE id=%s
                """, (str(id)))

    def update(self, id, **keyvals):
        column_names = keyvals.keys()
        params = keyvals.values()
        stmt = 'Update reviews SET {} WHERE id={}'.format(' AND '.join([col + '=%s' for col in column_names]), id)
        self._conn.execute(stmt, list(params))

    def get_reviews_by_date(self):
        c = self._curr
        c.execute("""
        SELECT * FROM reviews ORDER BY date ASC
        """)
        return [Review(*row[1:], row[0]) for row in c.fetchall()]

    def sum_column(self, col_name):
        c = self._curr
        c.execute("""
        SELECT SUM({}) FROM reviews
        """.format(col_name))
        return c.fetchone()[0]

    def get_average_rating(self, media_id):
        c = self._curr
        c.execute("""
               SELECT avg(rating) FROM reviews Where media_id =%s
               """, (str(media_id)))
        return c.fetchone()[0]


class _Users:
    def __init__(self, curr):
        self._curr = curr

    def insert(self, user):
        self._curr.execute("""
        INSERT INTO users (id, name, type) VALUES (%s, %s, %s)
        """, list(vars(user).values()))

    def find_by(self, **keyvals):
        column_names = keyvals.keys()
        params = keyvals.values()

        stmt = 'SELECT * FROM user WHERE {}'.format(' AND '.join([col + '=%s' for col in column_names]))

        c = self._curr
        c.execute(stmt, list(params))
        return [User(*row[:]) for row in c.fetchall()]

    def limited_find_by(self, **keyvals):
        column_names = keyvals.keys()
        params = keyvals.values()

        stmt = 'SELECT * FROM users WHERE {} LIMIT {}'.format(' AND '.join([col + '=%s' for col in column_names]),
                                                             dbvalues["media_limit"])

        c = self._curr
        c.execute(stmt, list(params))
        return [User(*row[:]) for row in c.fetchall()]

    def delete(self, id):
        self._curr.execute("""
                DELETE FROM users WHERE id=%s
                """, (str(id)))

    def update(self, id, **keyvals):
        column_names = keyvals.keys()
        params = keyvals.values()
        stmt = 'Update users SET {} WHERE id={}'.format(' AND '.join([col + '=%s' for col in column_names]), id)
        self._curr.execute(stmt, list(params))


class _Medias:
    def __init__(self, curr):
        self._curr = curr

    def insert(self, media):
        self._curr.execute("""
        INSERT INTO medias (id, name , type) VALUES (%s, %s, %s)
        """, list(vars(media).values()))

    def find_by(self, **keyvals):
        column_names = keyvals.keys()
        params = keyvals.values()

        stmt = "SELECT * FROM medias WHERE {}".format(' AND '.join([col + '=%s' for col in column_names]))

        c = self._curr
        c.execute(stmt, list(params))
        return [Media(*row[:]) for row in c.fetchall()]

    def delete(self, id):
        self._curr.execute("""
                DELETE FROM medias WHERE id=%s
                """, (str(id)))

    def update(self, id, **keyvals):
        column_names = keyvals.keys()
        params = keyvals.values()
        stmt = 'Update medias SET {} WHERE id={}'.format(' AND '.join([col + '=%s' for col in column_names]), id)
        self._curr.execute(stmt, list(params))

    def sum_column(self, col_name):
        c = self._curr
        c.execute("""
        SELECT SUM({}) FROM medias
        """.format(col_name))
        return c.fetchone()[0]

    def limited_find_by(self, **keyvals):
        column_names = keyvals.keys()
        params = keyvals.values()

        stmt = 'SELECT * FROM medias WHERE {} LIMIT {}'.format(' AND '.join([col + '=%s' for col in column_names]),
                                                             dbvalues["media_limit"])

        c = self._curr
        c.execute(stmt, list(params))
        return [Media(*row[:]) for row in c.fetchall()]



class _BraveryMoments:
    def __init__(self, curr ):
        self._curr = curr

    def insert(self, bravery_moment):
        self._curr.execute("""
        INSERT INTO braveryMoments (id, media_id , start) VALUES (%s, %s, %s)
        """, list(vars(bravery_moment).values()))

    def find_by(self, **keyvals):
        column_names = keyvals.keys()
        params = keyvals.values()

        stmt = 'SELECT * FROM braveryMoments WHERE {}'.format(' AND '.join([col + '=%s' for col in column_names]))

        c = self._curr
        c.execute(stmt, list(params))
        return [BraveryMoment(*row[:]) for row in c.fetchall()]

    def delete(self, id):
        self._curr.execute("""
                DELETE FROM braveryMoments WHERE id=%s
                """, (str(id)))

    def update(self, id, **keyvals):
        column_names = keyvals.keys()
        params = keyvals.values()
        stmt = 'Update braveryMoments SET {} WHERE id={}'.format(' AND '.join([col + '=%s' for col in column_names]), id)
        self._curr.execute(stmt, list(params))

    def sum_column(self, col_name):
        c = self._curr
        c.execute("""
        SELECT SUM({}) FROM braveryMoments
        """.format(col_name))
        return c.fetchone()[0]



