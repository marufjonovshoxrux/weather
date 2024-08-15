export function weather_today(item) {
	
  const flex = document.querySelector('div')
  const span = document.querySelector('span')
  const img = document.querySelector('img')
  const span_clock = document.querySelector('span')


  flex.classList.add('flex')
  
  span.innerHTML = item.location.localtime
  img.src = item.current.weather_icons
  img.alt = 'weather'
  span_clock.innerHTML = item.location.localtime

  flex.append(span,img,span_clock)

  return flex
}
