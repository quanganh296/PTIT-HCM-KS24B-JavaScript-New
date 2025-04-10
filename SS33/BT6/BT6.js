const weatherData = {
    "Hà Nội": {
      temperature: 25,
      humidity: 70,
      windSpeed: 5,
      description: "Có mây",
      icon: "☁️",
    },
    "Hồ Chí Minh": {
      temperature: 32,
      humidity: 75,
      windSpeed: 7,
      description: "Nắng",
      icon: "☀️",
    },
    "Đà Nẵng": {
      temperature: 28,
      humidity: 82,
      windSpeed: 12,
      description: "Mưa rào",
      icon: "🌧️",
    },
  };
  
  const cityInput = document.getElementById("cityInput");
  const searchButton = document.getElementById("searchButton");
  const weatherCard = document.getElementById("weatherCard");
  const errorMessage = document.getElementById("errorMessage");
  const cityName = document.getElementById("cityName");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const humidity = document.getElementById("humidity");
  const windSpeed = document.getElementById("windSpeed");
  const weatherIcon = document.getElementById("weatherIcon");
  
  function searchWeather() {
    const city = cityInput.value.trim();
  
    if (weatherData[city]) {
      cityName.textContent = city;
      temperature.textContent = `${weatherData[city].temperature}°C`;
      description.textContent = weatherData[city].description;
      humidity.textContent = `Độ ẩm: ${weatherData[city].humidity}%`;
      windSpeed.textContent = `Tốc độ gió: ${weatherData[city].windSpeed} km/h`;
      weatherIcon.textContent = weatherData[city].icon;
  
      weatherCard.style.display = "block";
      errorMessage.style.display = "none";
    } else {
      errorMessage.style.display = "block";
      weatherCard.style.display = "none";
    }
  }
  
  searchButton.addEventListener("click", searchWeather);
  
  cityInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      searchWeather();
    }
  });