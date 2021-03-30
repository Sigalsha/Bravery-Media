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
            _update_movie_db(movie)
            _add_bravery_rate(movie, data[movie.id])
    return data


def search_favorites(category):
    # top 50 return all
    repo.media.find_by(type=category)
    None


def get_item_info(item_id):
    # TODO: connect to imdb
    media = repo.media.find_by(id=item_id)[0]
    return vars(media)


def add_review(item_id, bravery_moments, content, reviewer):
    review = Review(item_id, content, reviewer, bravery_moments, datetime.datetime.now())
    repo.reviews.insert()


def add_rating(item_id, rating):
    review = Review(item_id, "", None, rating, datetime.datetime.now())
    repo.reviews.insert(review)

# region private methods


def _update_movie_db(movie):
    media = repo.media.find_by(id=movie.id)
    if not media:
        repo.media.insert(Media(movie.id, movie.title, "movie"))


def _add_data_to_movie(movie, data):
    _add_bravery_rate(movie.id, data)
    _add_heroism_moments(movie.id, data)
    _add_recommendations(movie.id, data)


def _add_bravery_rate(movie_id, data):
    data['braveryRate'] = repo.reviews.get_average_rating()


def _add_heroism_moments(movie_id, data):
    repo.braveryMoment.find_by(id=movie_id)
    data['selectedHeroismMoments'] = 0


def _add_recommendations(movie_id, data):
    data['recommendations'] = 0

# endregion

