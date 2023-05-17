import { GeoDTO } from './models.js'
import { isObjectEmpty } from './utils.js'

const IP_KEY = 'at_Y8Mjqb5XaYxroBqukjZzEPT5j6DJf'

const URL = ipAddress =>
  `https://geo.ipify.org/api/v2/country,city?apiKey=${IP_KEY}&ipAddress=${ipAddress}`

export class IPAdressTracker {
  #geoData = {}

  get info() {
    if (isObjectEmpty(this.#geoData)) {
      console.warn('Please call the fetch method to get up actual info')
      return new GeoDTO(this.#geoData).data
    }
    return this.#geoData
  }

  async fetch(ip) {
    try {
      const response = await fetch(URL(ip))

      if (!response.ok) throw new Error('during fetching location info via ip')

      const geoObject = await response.json()

      this.#geoData = new GeoDTO(geoObject).data
    } catch (error) {
      console.error(error)
    }
  }
}
