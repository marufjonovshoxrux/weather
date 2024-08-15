import { weather_today } from '../../components/weather_today.js'
import { weather_week } from '../../components/weather_week.js'
import { reload } from '../../lib/utils.js'

const time_weather = document.querySelector('.time_weather')

reload(time_weather, weather_today)

const calendars_weather = document.querySelector('.calendars_weather')

reload(calendars_weather, weather_week)

const updown = document.querySelector('#updown')

updown.onclick = () => {
	location.assign('/')
}
