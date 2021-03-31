# from Server.dbconnect.repository import repo
from Server.dbconnect.mysql_repository import repo
from data_manager import Queries

if __name__ == '__main__':

    repo.create_tables()
    moments = Queries.search_by_type("movie", "pianist")
    Queries.add_review(423, 5, 34, "aaaaaaaa", 5)
    Queries.add_review(423, 10, 54, "aaaaaaaa", 5)
    Queries.add_review(423, 3, 12, "aaaaaaaa", 5)
    Queries.add_review(423, 1, 65, "aaaaaaaa", 5)
    Queries.add_review(423, 5, 6666, "hhhhhhhh", 2)



    moments = Queries.search_by_type("movie", "pianist")

    iteminfo = Queries.get_item_info(423)

    x=0

