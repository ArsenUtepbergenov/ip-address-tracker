const extraInfo = {
  timezone: 'UTC',
}

export class Info {
  static sendToNode(node, data) {
    const elementsWithData = node.querySelectorAll('[data-info]')

    elementsWithData.forEach(element => {
      const extra = extraInfo[element.dataset.info] ?? ''
      element.innerHTML = extra + data[element.dataset.info]
    })
  }
}
