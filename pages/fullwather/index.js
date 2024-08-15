import { weather_today } from '../../components/weather_today.js'
import { weather_week } from '../../components/weather_week.js'
import { reload } from '../../lib/utils.js'

const url =
	'https://api.weatherstack.com/current?access_key=7b0299eda215910a7d8a6984de51c4ef&query=' +
	'samarkand'
const options = {
	method: 'GET',
}


const response = await fetch(url, options)
const result = await response.json()


const time_weather = document.querySelector('.time_weather')

reload(result,time_weather, weather_today)

const calendars_weather = document.querySelector('.calendars_weather')

reload(result,calendars_weather, weather_week)

const updown = document.querySelector('#updown')

updown.onclick = () => {
	location.assign('/')
}	

