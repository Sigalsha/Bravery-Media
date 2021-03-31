import json, requests
from Server.dbconnect import config


class MovieResult:
    def __init__(self, id, title, type, image, plot):
        self.id = id
        self.title = title
        self.type = type
        self.image = image
        self.plot = plot


def search(text):
    results = []
    i = 1
    while (len(results) < 4 and i < 3) or (len(results) == 0 and i < 9):
        results = results + (search_page(text, i))
        i = i + 1
    return results


def search_page(text, page):
    url = config.get['search_movie_url'].format(config.get['API_Key'], text, page)
    r = requests.get(url=url, params=config.get['PARAMS'])
    results = json.loads(json.dumps(r.json()['results']))
    results_with_keywords = map(lambda m: add_keywords(m), results)
    relevant_results = list(filter(is_movie_relevant, results_with_keywords))
    return list(map(lambda m: dict_to_object(m), relevant_results))


def add_keywords(movie):
    url = config.get['movie_keywords_url'].format(movie['id'], config.get['API_Key'])
    r = requests.get(url=url, params=config.get['PARAMS'])
    movie['keywords'] = json.loads(json.dumps(r.json()['keywords']))
    return movie


def is_movie_relevant(movie):
    if any(s in movie['keywords'] for s in config.relevant_keywords):
        return True
    contained_secondary_keywords = list(filter(lambda s: s in movie['keywords'], config.relevant_keywords2))
    if len(contained_secondary_keywords) > 1:
        return True
    return False


def dict_to_object(m):
    return MovieResult(m['id'], m['title'], "Movie", "https://www.themoviedb.org/t/p/w1280" + m['poster_path'],
                       m['overview'])
