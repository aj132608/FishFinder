# Stardew Valley Fish Finder

This project is a tool for Stardew Valley players/enthusiasts.

## Goal

This project is intended to be used as a tool for indentifying what fish can be caught 
on particular days in Stardew Valley given Season and Weather conditions.

## Componenets

### Frontend

The frontend is built with React JS. It's a simple webpage with two dropdowns that 
allow the user to select the Season and Weather conditions. Upon pressing the submit 
button, a table of fish that can be caught in the selected conditions will be shown.

### Backend

The backend is a Flask app API built with Python. It's a specialized API that does the 
following :

- loads the fish data from a .csv file into a Pandas Dataframe
- includes a route that returns all fish data as a json
- includes a route that returns fish filtered by specific season and weather conditions

## How to Start Components

### Frontend

Navigate to the project directory (frontend):

`cd frontend`

In the project directory (frontend), you can run:

`npm run start`

Runs the frontent app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Backend

Navigate to the project directory (backend):

`cd backend`

Install dependencies

`pip install -r requirements.txt`

Run the Flask Server:

`python fish_backend.py`