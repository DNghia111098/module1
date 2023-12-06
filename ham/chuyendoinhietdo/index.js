<p>
  <label>Fahrenheit</label>
  <input id="inputFahrenheit" type="number" placeholder="Fahrenheit"
  oninput="temperatureConverter(this.value)"
  onchange="temperatureConverter(this.value)">
</p>
<p>Celsius: <span id="outputCelsius"></span></p>

function temperatureConverter(valNum) {
        valNum = parseFloat(valNum);
        document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
    }