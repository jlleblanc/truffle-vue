let rawTruffles = null
let keyedTruffles = {}
let hostKeys = []
let guestKeysForHosts = {}

function keyTruffles () {
  for (var element of rawTruffles) {
    keyedTruffles[element.id] = element

    if (element.hostId === undefined) {
      hostKeys.push(element.id)
    } else {
      if (guestKeysForHosts[element.hostId] === undefined) {
        guestKeysForHosts[element.hostId] = []
      }

      guestKeysForHosts[element.hostId].push(element.id)
    }
  }
}

export default class {
  constructor (truffles) {
    rawTruffles = truffles
  }

  parseIfNeeded () {
    if (hostKeys.length === 0) {
      keyTruffles()
    }
  }

  getRawTruffles () {
    return rawTruffles
  }

  getById (id) {
    this.parseIfNeeded()

    if (keyedTruffles[id] !== undefined) {
      return keyedTruffles[id]
    }

    return false
  }

  getHostTruffleKeys () {
    this.parseIfNeeded()

    return hostKeys
  }

  getGuestsByHostId (id) {
    this.parseIfNeeded()

    if (guestKeysForHosts[id] === undefined) {
      return false
    } else {
      return guestKeysForHosts[id].map(guestKey => {
        return this.getById(guestKey)
      }, this)
    }
  }
}
