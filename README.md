# Weather-Journal App Project

## Table of Contents

* [Overview](#overview)
* [Requirements](#requirements)
* [Function Documentation](#function-documentation)
    - [getWeather(zip, units)](#getweatherzip-units)
    - [postData(url, data)](#postdatadata)
    - [getRecentEntry()](#getrecententry)
    - [throwError(err, msg)](#throwerrorerr-msg))
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

### postData(url, data)
- Takes weather `data` as an argument and then posts the (Date, Temperature and User-input) to server `url`

### getRecentEntry()
-  Fetch most recent entry from the server and display it to the user

### throwError(err, msg)
- Helper function to handle errors
- Takes an Error object `err` and a message `msg` , prints the Error object to console and displays the message to the user on the web page

## Version History
- Initial commit
- Add function to fetch weather data
- Add function to POST date, temperature and user feelings to server
- Add function to retrieve most recent data from server and display it
- Nominal changes to comply with Project Rubric
