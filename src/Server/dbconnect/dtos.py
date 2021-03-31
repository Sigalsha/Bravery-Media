class Review:
    def __init__(self, media_id, review, reviewer, rating, date, id=None):
        self.id = id
        self.media_id = media_id
        self.date = date
        self.rating = rating
        self.review = review
        self.reviewer = reviewer


class User:
    def __init__(self, name, user_type, id=None):
        self.id = id
        self.name = name
        self.type = user_type


class Media:
    def __init__(self, name, media_type, id=None):
        self.id = id
        self.name = name
        self.type = media_type


class BraveryMoment:
    def __init__(self, media_id, start, id=None):
        self.id = id
        self.media_id = media_id
        self.start = start