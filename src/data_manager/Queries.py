from Server.dbconnect.repository import repo
from Server.dbconnect.daos import *
from Server.dbconnect import imdb_conn
import datetime


def search_by_type(item_type, keywords):
    data = {}
    if item_type == "movie":
        movies_list = imdb_conn.search(keywords)
        for movie in movies_list:
            data[movie.id] = vars(movie)
            _add_data_to_movie(movie, data[movie.id])

    # TODO: add keywords to search by
    media_list = repo.media.find_by(type=item_type)
    data = {}
    for media in media_list:
        data[media.id] = media.__dict__
    return data


def search_favorites(category):
    # top 50 return all
    repo.media.find_by(type=category)
    None


def get_item_info(item_id):
    # TODO: connect to imdb
    media = repo.media.find_by(id=item_id)[0]
    return media.__dict__


def add_review(item_id, bravery_moments, content, reviewer):
    review = Review(item_id, content, reviewer, bravery_moments, datetime.datetime.now())
    repo.reviews.insert()


def add_rating(item_id, rating):
    review = Review(item_id, "", None, rating, datetime.datetime.now())
    repo.reviews.insert(review)

# region private methods

def _add_data_to_movie(movie, data):
    media = repo.media.find_by(id=movie.id)
    if not media:
        repo.media.insert(Media(movie.id, movie.title, "movie"))
    else:
        # get reviews
        data['']=''

# endregion

