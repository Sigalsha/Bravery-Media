class Review:
    def __init__(self, media_id, review, reviewer, rating, date, id=None):
        self.id = id
        self.media_id = id
        self.date = date
        self.rating = rating
        self.review = review
        self.reviewer = reviewer


class User:
    def __init__(self, id, name, user_type):
        self.id = id
        self.name = name
        self.type = user_type


class Media:
    def __init__(self, id, name, media_type):
        self.id = id
        self.name = name
        self.type = media_type


class BraveryMoment:
    def __init__(self, id, media_id, start):
        self.id = id
        self.media_id = media_id
        self.start = start