![TitlePicture](frontend/WebappTitlePic.png)

This project is a tool for Stardew Valley players/enthusiasts. 
Check it out [here](https://aj132608.github.io/FishFinder/). Data and style inspiration was drawn from 
[Stardew Valley's Wiki page](https://stardewvalleywiki.com/Stardew_Valley_Wiki). Check out that webpage if you want even more info on Stardew Valley.

## Goal

This project is intended to be used as a tool for indentifying what fish can be caught 
on particular days in Stardew Valley given Season and Weather conditions.

## Componenets

### Frontend

The frontend is built with React JS. It's a simple webpage with two dropdowns that 
allow the user to select the Season and Weather conditions. Upon pressing the submit 
button, a table of fish that can be caught in the selected conditions will be shown. 
This portion of the app is hosted on Github Pages and linked above.

### Backend

The backend is a Flask app API built with Python. It's a specialized API that does the 
following :

- loads the fish data from a .csv file into a Pandas Dataframe
- includes a route that returns all fish data as a json
- includes a route that returns fish filtered by specific season and weather conditions

## How I Deployed/Hosted each Component

### Frontend

I used the steps/documentation from [here.](https://github.com/gitname/react-gh-pages)

Navigate to the project directory (frontend):

```shell
$ cd frontend
```

#### 1. Install the `gh-pages` npm package and designate it as a development dependancy:

```shell
$ npm install gh-pages --save-dev
```

#### 2. Add a `homepage` property to your `package.json` file

```diff
{
    "name": "my-app",
    "version": "0.1.0",
+ "homepage": "https://gitname.github.io/react-gh-pages",
    "private": true,
```

At this point, the React app's `package.json` file includes a property named `homepage`.

#### 3. Add deployment scripts to the `package.json` file

Add a `predeploy` property and a `deploy` property to the `scripts` object:

```diff
    "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

At this point, the React app's `package.json` file includes deployment scripts.

#### 4. Add a "remote" that points to the GitHub repository

You can do that by issuing a command in this format:

```shell
$ git remote add origin https://github.com/{username}/{repo-name}.git
```

In my case, I'll run:

```shell
$ git remote add origin https://github.com/aj132608/FishFinder.git
```

#### 5. Push the React app to the GitHub repository

Type the following command to use your added scripts:

```shell
$ npm run deploy
```

#### 6 Configure Github Pages

To successfully host the webpage, you must go to the Github Pages settings and save. More info is in the documentation link at the top.

### Backend

Navigate to the project directory (backend):

`cd backend`

Install dependencies

`pip install -r requirements.txt`

Run the Flask Server:

`python fish_backend.py`