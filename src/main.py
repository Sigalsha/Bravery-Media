from data_manager import Queries
from Server.dbconnect.mysql_repository import repo

if __name__ == '__main__':
    repo.create_tables()
    movies1 = Queries.search_by_type("movie", "pianist")
    movies2 = Queries.search_by_type("movie", "pijama")

    id1 = movies1[0].id
    id2 = movies2[0].id

    Queries.add_review(id1, 9, 34, "aaa", 0)
    Queries.add_review(id1, 2, 354, "bbb", 0)
    Queries.add_review(id2, 19, 44, "ccc", 0)
    Queries.add_review(id2, 4, 3464, "ddd eee fff", 0)

    print(Queries.get_item_info(id1))
    print(Queries.get_item_info(id2))
