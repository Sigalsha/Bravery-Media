import json, requests

google_api_key = "AIzaSyAEfzq99KQOFj_LLuo0SIojpg6ub8QniYw"


def search_by_keyword(keyword):
    search_url = "https://www.googleapis.com/books/v1/volumes?"
    search_params = {'q': keyword, 'maxResults': 40, 'subject': 'Holocaust', 'projection': 'lite', 'key': google_api_key}
    request = requests.get(url=search_url, params=search_params)
    results = request.json()
    print(results)

