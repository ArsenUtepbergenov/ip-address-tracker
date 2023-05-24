import { Map } from './Map.js'
import { IPAdressTracker } from './IPAdressTracker.js'
import { Info } from './Info.js'
import { getElById } from './utils.js'

const map = new Map([0, 0])
const tracker = new IPAdressTracker()

const debouncedHandleSearch = debounce(handleFetchInfo, 300)

const searchBtn = getElById('searchBtn')
const searchInput = getElById('searchInput')
const info = getElById('info')

searchBtn.addEventListener('click', debouncedHandleSearch)
searchInput.addEventListener('input', formatIpAddress)

function handleFetchInfo(event) {
  event.preventDefault()

  tracker.fetch(searchInput.value).then(() => {
    Info.sendToNode(info, tracker.info)
    console.log(tracker.info);
    map.setPosition([tracker.info.lat, tracker.info.lng])
  })
}

function debounce(func, delay) {
  let timerId

  return function (...args) {
    clearTimeout(timerId)

    timerId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

function formatIpAddress(event) {
  const input = event.target
  let value = input.value.replace(/[^0-9.]/g, '')
  const segments = value.split('.')

  if (segments.length > 4) {
    segments.length = 4
  }

  const validSegments = segments.map(segment => {
    const parsedSegment = parseInt(segment)
    return isNaN(parsedSegment) ? '' : Math.min(Math.max(parsedSegment, 0), 255)
  })

  value = validSegments.join('.')

  input.value = value
}
