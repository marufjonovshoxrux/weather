import { weather_today } from "./components/weather_today.js"
import { reload } from "./lib/utils.js"

const weather_input = document.querySelector('#weather')

const img = document.querySelector('img')
const number_weather = document.querySelector('.number_weather')
const Wind = document.querySelector('.Wind')
const Hum = document.querySelector('.Hum')
const data_weather = document.querySelector('.data_weather')

weather_input.onkeyup = async () => {
	const url =
		'https://api.weatherstack.com/current?access_key=7b0299eda215910a7d8a6984de51c4ef&query=' +
		weather_input.value
	const options = {
		method: 'GET',
	}

	try {
		const response = await fetch(url, options)
		const result = await response.json()

		img.src = result.current.weather_icons
		number_weather.innerHTML = result.current.temperature + '°'
		Wind.innerHTML = 'Wind | ' + result.current.wind_speed + ' km/h'
		Hum.innerHTML = 'Hum | ' + result.current.uv_index + ' %'
		data_weather.innerHTML = result.location.localtime


		

	} catch (error) {
    console.error(error)
	}
}


const mini_weather = document.querySelector('.mini_weather')

mini_weather.onclick = () => {
	location.assign('/pages/fullwather/')
}
