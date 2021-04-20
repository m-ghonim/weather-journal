# Weather-Journal App Project

## Table of Contents

* [Overview](#overview)
* [Requirements](#requirements)
* [Function Documentation](#function-documentation)
    - [getWeather(zip, units)](#getweatherzip-units)
* [Version History](#version-history)

## Overview
Based on [starter files](https://github.com/udacity/fend/tree/refresh-2019/projects/weather-journal-app) from Udacity FEND repo.
This is an asynchronous web app. It uses [openweathermap.org](https://openweathermap.org/) API to dynamically update and record the user's feelings about different weather states. 

## Requirements
- A node environment
- Express `npm install express`
- CORS `npm install cors`
- Body Parser `npm install body-parser`

## Function Documentation
### getWeather(zip, units)
- Fetches US weather data from [openweathermap.org](https://openweathermap.org/) based on supplied zip code.
- `units` can be either 'standard', 'metric' or 'imperial'. Default value is 'metric'.
## Version History
- Initial commit
- Add function to fetch weather data
- Add function to send date, temperature and user feelings to server
- Add function to retrieve most recent data from server and display it