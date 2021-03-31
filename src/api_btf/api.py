from flask import Flask, request
from data_manager.Queries import *
import json


app = Flask(__name__)


@app.route('/get_top_items', methods=['GET'])
def get_top_items():
    category = request.args.get("category")
    top_items = search_favorites(category)
    return json.dumps(top_items)


@app.route('/get_search_results', methods=['GET'])
def get_search_results():
    item_type = request.args.get("item_type")
    keywords = request.args.get("keywords")
    search_results = search_by_type(item_type, keywords)
    return json.dumps(search_results)


@app.route('/get_item', methods=['GET'])
def get_item():
    item_id = request.args.get("item_id")
    get_movie_info(item_id)
    return json.dumps(item_info)


@app.route('/add_recommendation', methods=['POST'])
def add_recommendation():
    recommendation = request.json
    item_id = recommendation.id
    bravery_moments = recommendation.selectedHeroismMoments
    content = recommendation.recommendation
    reviewer = recommendation.recommenderName
    add_review(item_id, bravery_moments, content, reviewer)


@app.route('/add_heroism_rate', methods=['POST'])
def add_heroism_rate():
    rating = request.json
    item_id = rating.id
    item_rating = rating.heroism_rate
    add_rating(item_id, item_rating)


if __name__ == '__main__':
    app.run(debug=True, port=5000)
