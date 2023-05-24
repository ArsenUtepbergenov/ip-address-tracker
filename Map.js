export class Map {
  #instance = null

  constructor([lat, lng]) {
    this.#instance = L.map('map', {
      center: [lat, lng],
      zoom: 11,
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#instance)
  }

  setPosition(data) {
    this.#instance.flyTo(data)
    L.marker(data).addTo(this.#instance);
  }
}
