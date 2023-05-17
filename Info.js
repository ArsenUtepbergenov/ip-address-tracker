export class Info {
  static sendToNode(node, data) {
    const elementsWithData = node.querySelectorAll('[data-info]')

    elementsWithData.forEach(element => {
      element.innerHTML += data[element.dataset.info]
    })
  }
}
