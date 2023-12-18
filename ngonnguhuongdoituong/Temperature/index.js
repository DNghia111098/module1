class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    Temperature = function() {
    }
    getCelsius = function () {
        return this.celsius;
    }
    getFahrenheit = function () {
        let fahrenheit = (9 / 5) * this.celsius + 32;
        return fahrenheit;
    }
    getKenvin = function() {
        let kenvin = this.celsius + 273.15;
        return kenvin;
    }
}
let temperature = new Temperature (25);
let fahrenheit = temperature.getFahrenheit();
let kenvin = temperature.getKenvin();

alert(`Nhiệt độ F là : ${fahrenheit}. nhiệt độ K là: ${kenvin}`)
