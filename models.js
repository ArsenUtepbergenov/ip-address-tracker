export class GeoDTO {
  constructor(geoObject) {
    this.data = {
      ip: geoObject.ip ?? '',
      location: geoObject.location?.city ?? '',
      timezone: geoObject.location?.timezone ?? '',
      isp: geoObject.isp ?? '',
    }
  }
}
