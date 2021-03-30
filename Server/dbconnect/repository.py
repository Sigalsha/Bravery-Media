import sqlite3

import atexit
import sqlite3
from dtos import *
from daos import _Users, _Reviews, _Medias

class _Repository:
    def __init__(self):
        self._conn = sqlite3.connect('database.db')
        self.users = _Users(self._conn)
        self.reviews = _Reviews(self._conn)
        self.media = _Medias(self._conn)

    def _close(self):
        self._conn.commit()
        self._conn.close()

    def create_tables(self):
        self._conn.executescript("""
        CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY,
        username TEXT NOT NULL,
        type TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS reviews(
        id INTEGER PRIMARY KEY,
        media_id INTEGER PRIMARY KEY,
        review TEXT NOT NULL,
        reviewer INT NOT NULL,
        date DATE NOT NULL,
        rating INT NOT NULL,
        FOREIGN KEY(reviewer) REFERENCES users(id)
        FOREIGN KEY(media_id) REFERENCES media(id)
        );
        
        CREATE TABLE IF NOT EXISTS medias(
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        type TEXT NOT NULL,
        FOREIGN KEY(logistic) REFERENCES logistics(id)
        );
        """)


repo = _Repository()
atexit.register(repo._close)
