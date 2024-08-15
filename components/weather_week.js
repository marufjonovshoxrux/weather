export function weather_week(item) {
  

  const calendar_weather = document.createElement('.calendar_weather')
  const span = document.createElement('span')
  const img = document.createElement('img')
  const span_clock = document.createElement('span')
  
  calendar_weather.classList.add('.calendar_weather')

  span.innerHTML = 'sep,13'
  img.src = '../../svg/microphone.svg'
  img.alt = 'weather'
  span_clock.innerHTML = "21c"

  calendar_weather.append(span,img,span_clock)

  return calendar_weather


}