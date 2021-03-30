from dtos import Review, User, Media


class _Reviews:
    def __init__(self, conn):
        self._conn = conn

    def insert(self, review):
        self._conn.execute("""
        INSERT INTO reviews (media_id, date, rating, review, reviewer) VALUES (?, ?, ?, ?)
        """, list(vars(review).values())[1:])

    def find_by(self, **keyvals):
        column_names = keyvals.keys()
        params = keyvals.values()

        stmt = 'SELECT * FROM reviews WHERE {}'.format(' AND '.join([col + '=?' for col in column_names]))

        c = self._conn.cursor()
        c.execute(stmt, list(params))
        return [Review(*row[1:], row[0]) for row in c.fetchall()]

    def delete(self, id):
        self._conn.execute("""
                DELETE FROM reviews WHERE id=?
                """, (str(id)))

    def update(self, id, **keyvals):
        column_names = keyvals.keys()
        params = keyvals.values()
        stmt = 'Update reviews SET {} WHERE id={}'.format(' AND '.join([col + '=?' for col in column_names]), id)
        self._conn.execute(stmt, list(params))

    def get_reviews_by_date(self):
        c = self._conn.cursor()
        c.execute("""
        SELECT * FROM reviews ORDER BY date ASC
        """)
        return [Review(*row[1:], row[0]) for row in c.fetchall()]

    def sum_column(self, col_name):
        c = self._conn.cursor()
        c.execute("""
        SELECT SUM({}) FROM reviews
        """.format(col_name))
        return c.fetchone()[0]


class _Users:
    def __init__(self, conn):
        self._conn = conn

    def insert(self, user):
        self._conn.execute("""
        INSERT INTO users (id, name, type) VALUES (?, ?, ?)
        """, list(vars(user).values()))

    def find_by(self, **keyvals):
        column_names = keyvals.keys()
        params = keyvals.values()

        stmt = 'SELECT * FROM user WHERE {}'.format(' AND '.join([col + '=?' for col in column_names]))

        c = self._conn.cursor()
        c.execute(stmt, list(params))
        return [User(*row[:]) for row in c.fetchall()]

    def delete(self, id):
        self._conn.execute("""
                DELETE FROM users WHERE id=?
                """, (str(id)))

    def update(self, id, **keyvals):
        column_names = keyvals.keys()
        params = keyvals.values()
        stmt = 'Update users SET {} WHERE id={}'.format(' AND '.join([col + '=?' for col in column_names]), id)
        self._conn.execute(stmt, list(params))


class _Medias:
    def __init__(self, conn):
        self._conn = conn

    def insert(self, media):
        self._conn.execute("""
        INSERT INTO media (id, name , type) VALUES (?, ?, ?)
        """, list(vars(media).values()))

    def find_by(self, **keyvals):
        column_names = keyvals.keys()
        params = keyvals.values()

        stmt = 'SELECT * FROM medias WHERE {}'.format(' AND '.join([col + '=?' for col in column_names]))

        c = self._conn.cursor()
        c.execute(stmt, list(params))
        return [Media(*row[:]) for row in c.fetchall()]

    def delete(self, id):
        self._conn.execute("""
                DELETE FROM medias WHERE id=?
                """, (str(id)))

    def update(self, id, **keyvals):
        column_names = keyvals.keys()
        params = keyvals.values()
        stmt = 'Update medias SET {} WHERE id={}'.format(' AND '.join([col + '=?' for col in column_names]), id)
        self._conn.execute(stmt, list(params))

    def sum_column(self, col_name):
        c = self._conn.cursor()
        c.execute("""
        SELECT SUM({}) FROM medias
        """.format(col_name))
        return c.fetchone()[0]

