const weatherform = document.querySelector(".weatherform");
const cityinput = document.querySelector(".cityinput");
const card = document.querySelector(".card");
const cityDisplay = document.querySelector(".citydisplay");
const tempDisplay = document.querySelector(".tempdisplay");
const humidityDisplay = document.querySelector(".humiditydisplay");
const descDisplay = document.querySelector(".descdisplay");
const emojiDisplay = document.querySelector(".weatheremoji");
const errorDisplay = document.querySelector(".errordisplay");

const apiKey = "75c2666e4b9d3d16c41e7fa00bef2204";

weatherform.addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = cityinput.value.trim();

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.error(error);
            displayError("City not found. Please try again.");
        }
    } else {
        displayError("Please enter a city name.");
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    }
    return await response.json();
}

function displayWeatherInfo(data) {
    const { name } = data;
    const { temp, humidity } = data.main;
    const { description, id } = data.weather[0];

    cityDisplay.textContent = name;
    tempDisplay.textContent = `${((temp - 273.15) * 9/5 + 32).toFixed(1)} °`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    descDisplay.textContent = description;
    emojiDisplay.textContent = getWeatherEmoji(id);
    errorDisplay.textContent = "";

    card.style.display = "flex";
}

function getWeatherEmoji(weatherId) {
    if (weatherId >= 200 && weatherId < 300) {
        return "⛈️";
    } else if (weatherId >= 300 && weatherId < 500) {
        return "🌧️";
    } else if (weatherId >= 500 && weatherId < 600) {
        return "🌦️";
    } else if (weatherId >= 600 && weatherId < 700) {
        return "❄️";
    } else if (weatherId >= 700 && weatherId < 800) {
        return "🌫️";
    } else if (weatherId === 800) {
        return "☀️";
    } else if (weatherId > 800) {
        return "☁️";
    } else {
        return "🌈";
    }
}

function displayError(message) {
    card.style.display = "flex";
    cityDisplay.textContent = "";
    tempDisplay.textContent = "";
    humidityDisplay.textContent = "";
    descDisplay.textContent = "";
    emojiDisplay.textContent = "";
    errorDisplay.textContent = message;
}
