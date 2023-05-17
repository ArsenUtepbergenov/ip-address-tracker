import { IPAdressTracker } from './IPAdressTracker.js'
import { Info } from './Info.js'
import { getElById } from './utils.js'

const tracker = new IPAdressTracker()

tracker.fetch('192.212.174.101').then(() => {
  Info.sendToNode(getElById('info'), tracker.info)
})
