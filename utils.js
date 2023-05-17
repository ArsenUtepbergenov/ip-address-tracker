export function isObjectEmpty(name) {
  return name && Object.keys(name).length === 0 && name.constructor === Object
}

export function getElById(id) {
  return document.getElementById(id)
}
