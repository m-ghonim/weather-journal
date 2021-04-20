/* ------------------ Global Variables ------------------ */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
// API keys shouldn't be anywhere near clientside, but the project rubric says so!
const key = '72c36cb8ad1516dbddc9c5e07febae33';


/* ------------------ Helper Functions ------------------ */

/* Function called by event listener */

/* GET Weather Data*/
async function getWeather(zip, units='metric') {
    const respo = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${key}&units=${units}`)
    .then(response => response.json())
    .catch((err) => console.error('Fetch Error:', err));
    return respo
}

/* POST data */

/* Function to GET Project Data */


/* ------------------ Event listeners ------------------ */

// Event listener to add function to existing HTML DOM element

getWeather('94040')
.then((w) => {console.log(w)});