export function weather_today(item) {
	
  const flex = document.createElement('div')
  const span = document.createElement('span')
  const img = document.createElement('img')
  const span_clock = document.createElement('span')


  flex.classList.add('flex')
  
  span.innerHTML = item.location.localtime
  img.src = item.current.weather_icons
  img.alt = 'weather'
  span_clock.innerHTML = item.location.localtime

  flex.append(span,img,span_clock)

  return flex
}
