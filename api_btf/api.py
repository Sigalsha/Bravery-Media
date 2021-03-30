from flask import Flask, request
from data_manager.Queries import *
import json
import os


app = Flask(__name__)


@app.route('/get_top_items', methods=['GET'])
def get_top_items():
    category = request.args.get("category")
    search_favorites_by_category(category)


@app.route('/get_search_results', methods=['GET'])
def navigate_to_search_results():
    item_type = request.args.get("item_type")
    keywords = request.args.get("keywords")
    search_by_type(item_type, keywords)


@app.route('/get_item', methods=['GET'])
def get_item():
    item_id = request.args.get("item_id")
    get_item_info(item_id)

@app.route('/add_recommendation', methods=['POST'])
def add_review():
    review_json = request.json
    item_id = review_json.id
    bravery_moments = review_json.selectedHeroismMoments
    content = review_json.recommendation
    reviewer = review_json.recommenderName


@app.route('/add_rating', methods=['POST'])
def add_rating():


if __name__ == '__main__':
    app.run(debug=True, port=5000)
