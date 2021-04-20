/* ------------------ Global Variables ------------------ */

// Personal API Key for OpenWeatherMap API
// API keys shouldn't be anywhere near clientside, but the project rubric requires this!
const key = "72c36cb8ad1516dbddc9c5e07febae33";

/* ------------------ Helper Functions ------------------ */

// Receives Error object and a message, prints object to console and displays the message to the user
function throwError(err, msg) {
  // print error to console
  console.error(msg);
  console.error(err);

  // flash error message to user
  const msgArea = document.getElementById("flash-msg");
  msgArea.classList.add("msg-error");
  msgArea.textContent = msg;
}

/* ------------------ Main Functions ------------------ */

/* GET Weather Data*/
async function getWeather(zip, units = "metric") {
  const respo = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${key}&units=${units}`
  )
    .then((response) => response.json())
    .catch((err) => throwError(err, "Error: Can't fetch weather data"));
  return respo;
}

/* Receive weather data and post (Date, Temperature and User-input) to server*/
async function postData(data) {
  // Create a new date instance
  const d = new Date();
  const date = d.toDateString();
  // Get user entry
  const feelings = document.getElementById("txtFeelings").value;
  // Get temperature
  const temperature = data.main.temp;
  // Prepare data to send
  const payload = { date, temperature, feelings };

  // Send data to server
  const response = await fetch('/post', {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).catch((err) => throwError(err, "Error: Can't post data to server"));
};

// Get most recent user entry and display it
async function getRecentEntry() {
  const respo = await fetch("/recent")
    .then((response) => response.json())
    .then((data) => {
      const divDate = document.getElementById("date");
      const divTemp = document.getElementById("temp");
      const divContent = document.getElementById("content");
      divDate.textContent = `Date: ${data.date}`;
      divTemp.innerHTML = `Temperature is ${data.temperature}&deg;c`;
      divContent.textContent = `${data.feelings}`;
      const msgArea = document.getElementById("flash-msg");
      msgArea.classList.remove("msg-error");
      msgArea.textContent = "";
    })
    .catch((err) => {
      throwError(err, "Error: Can't fetch most recent entry from server");
    });
}

/* GET weather data, POST data to server, retrieve this data via a GET request and display the result */
function generateData() {
  // Get user input
  const zipCode = document.getElementById("txtZip").value;
  const feelings = document.getElementById("txtFeelings").value;

  // Validate ZIP code
  const regex = /\d+/
  if ( !regex.test(zipCode) ) {
    const msgArea = document.getElementById("flash-msg");
    msgArea.classList.add("msg-error");
    msgArea.textContent = "Please enter a valid US ZIP code!";
    return
  }

  // Test for empty required fields
  if (feelings == "") {
    const msgArea = document.getElementById("flash-msg");
    msgArea.classList.add("msg-error");
    msgArea.textContent = "Feelings field is required!";
    return
  }

  // Everything ok, execute main functions
  getWeather(zipCode)
    .then((weatherData) => postData(weatherData))
    .then(() => getRecentEntry());
}

/* ------------------ Event listeners ------------------ */

// Wait for DOM to load
window.addEventListener('DOMContentLoaded', (event) => {
  const btnGenerate = document.getElementById("btnGenerate");
  btnGenerate.addEventListener("click", generateData);
});
