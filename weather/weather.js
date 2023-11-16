document.addEventListener('DOMContentLoaded', function () {
  var weather = document.getElementById('weather');

  function show() {
    console.clear();
    var city = weather.value; // Move this line here

    var api = `http://api.weatherapi.com/v1/current.json?key=92a245bc28b44d20ad1112251231511&q=${city}`;

    fetch(api)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        var background = document.getElementById('bg-image');
        background.style.display = "block";

        console.log('Weather Data:', data);
        var parentdiv = document.getElementById('weather-div');
        parentdiv.innerHTML = '';

        var today = document.createElement('h1');
        today.textContent = 'weather today';
        var weatherimg = document.createElement('img');
        weatherimg.src = data.current.condition.icon;
        var condition = document.createElement('p');
        condition.textContent = 'Condition: ' + data.current.condition.text;
        condition.style.color = 'black';
        console.log(condition);
        var temp = document.createElement('h1');
        temp.textContent = 'Temperature: ' + data.current.feelslike_c + '°C';
        parentdiv.appendChild(today);
        parentdiv.appendChild(weatherimg)
        parentdiv.appendChild(temp);
        parentdiv.appendChild(condition);

        if (data.current.condition.text === 'Sunny') {
          background.src = "sunnyday.jpg";
        } else if (data.current.condition.text.toLowerCase().includes("overcast")) {
          background.src = "rainy.jpg";
        } else if (data.current.condition.text.includes("Clear")) {
          background.src = "clear.jpg";
        } else if (data.current.condition.text.includes("Mist")) {
          background.src = "mist.jpg";
        }
        else if (data.current.condition.text.includes("snow")){
          background.src = "verycold.webp"
        }
        else if (data.current.condition.text.includes("rain"))
        {
          background.src = "rain.jpg";
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }

  // Attach the show function to a button click or other relevant event
  var showWeatherButton = document.getElementById('showWeatherButton');
  if (showWeatherButton) {
    showWeatherButton.addEventListener('click', show);
  }

  // Optionally, you can also define show as a global function
  window.show = show;

  weather.addEventListener("keydown", function (event) {
    // Check if the key pressed is Enter (key code 13)
    if (event.keyCode === 13) {
      // Call your function here
      show();
    }
  });
});
