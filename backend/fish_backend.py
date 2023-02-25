from flask import Flask, request
import pandas as pd

FISH_DATA_LOCATION = 'data/fish_data.csv'
FISH_DATA = pd.read_csv (FISH_DATA_LOCATION)


app = Flask(__name__)


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
    

    requested_fish = FISH_DATA[(FISH_DATA[season] == True) & (FISH_DATA[weather] == True)]
    
    return requested_fish.to_json()


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port="8080")