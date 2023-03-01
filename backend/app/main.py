from flask import Flask, request
from flask_cors import CORS, cross_origin
import pandas as pd

FISH_DATA_LOCATION = 'app/data/fish_data.csv'
FISH_DATA = pd.read_csv (FISH_DATA_LOCATION)
IMPORTANT_COLUMNS = ["NAME", "DESCRIPTION", "LOCATION", "TIME"]


def create_app(testing: bool = True):

    app = Flask(__name__)
    cors = CORS(app)

    @app.route("/get_all_fish", methods=['GET'])
    def get_all_fish():
        """
        Returns whole dataframe of fish data
        """
        return FISH_DATA.to_json()


    @app.route("/fish_query", methods=['POST'])
    def fish_query():
        post_request = request.json

        try:
            season = post_request['season']
            weather = post_request['weather']
        except KeyError:
            return "Error: Missing required key value pair. (season and weather)"
        
        # Filter out fish that don't meet the criteria 
        requested_fish = FISH_DATA[(FISH_DATA[(season.upper())] == True) & (FISH_DATA[weather.upper()] == True)]
        
        # Condense the df to only include important columns needed for the frontend
        # and return it as a list of dicts representing each fish 
        requested_fish_rows = requested_fish[IMPORTANT_COLUMNS].to_dict('records')

        return {"fish_data": requested_fish_rows}
    
    return app
