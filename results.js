// This is the API key 
const apiKey = '7a1d29c24ab5cfa89ee22d01de2b806e';

// Function to fetch weather data
function fetchWeatherData() {
    // Get the city name from the input field
    const location = document.getElementById('locationGet').value;
    console.log(location);

    // Create the API URL 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    // AJAX request
    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            // Retrieve the datas
            const weatherData = `
                    <p>City Name: ${data.name}</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    `;

            // this code for update the weather results in results.html page
            document.getElementById('weather-info').innerHTML = weatherData;
        }, 
        //this is the error function
        error: function(error) {
            console.error('Error fetching data:', error);
            // Display an error message
            document.getElementById('weather-info').innerHTML = '<p>Error: Unable to access, Provide the correct City Name</p>';
        }
    });
}
