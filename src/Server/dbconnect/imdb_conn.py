import json, requests
from Server.dbconnect import config


class MovieResult:
    def __init__(self, id, title, type, image, plot, creator, braveryRate, selectedHeroismMoments, recommendations,
                 suitableForEducation):
        self.id = id
        self.title = title
        self.type = type
        self.image = image
        self.plot = plot
        self.creator = creator
        self.braveryRate = braveryRate
        self.selectedHeroismMoments = selectedHeroismMoments
        self.recommendations = recommendations
        self.suitableForEducation = suitableForEducation


def search(text):
    url = "{}/{}/{}".format(config.get_request['search_movie_url'], config.get_request['API_Key'], text)
    r = requests.get(url=url, params=config.get_request['PARAMS'])
    results = json.loads(json.dumps(r.json()['results']))
    detailed_results = map(lambda m: get_movie(m['id']), results)
    relevant_results = list(filter(is_movie_relevant, detailed_results))
    return list(map(dict_to_object, relevant_results))


def get_movie(movie_id):
    url = "{}/{}/{}".format(config.get_request['get_movie_url'], config.get_request['API_Key'], movie_id)
    r = requests.get(url=url, params=config.get_request['PARAMS'])
    movie_detailed = json.loads(json.dumps(r.json()))
    return movie_detailed


def is_movie_relevant(movie):
    if any(s in movie['plot'].lower() for s in config.related_keywords) | \
            any(s in movie['keywords'].lower() for s in config.related_keywords):
        return True
    contained_secondary_keywords = list(filter(lambda s: s in movie['plot'].lower(), config.related_keywords2))
    if len(contained_secondary_keywords) > 1:
        return True
    contained_secondary_keywords = list(filter(lambda s: s in movie['keywords'].lower(), config.related_keywords3))
    if len(contained_secondary_keywords) > 1:
        return True
    return False


def dict_to_object(m):
    return MovieResult(m['id'], m['title'], "Movie", m['image'], m['plot'], m['directors'], None, None, None, None)
