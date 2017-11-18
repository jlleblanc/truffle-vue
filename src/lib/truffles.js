var rawTruffles = null
var keyedTruffles = {}
var hostKeys = []
var guestKeysForHosts = {}

function keyTruffles () {
  rawTruffles.forEach(function (element) {
    keyedTruffles[element.id] = element

    if (typeof element.hostId === 'undefined') {
      hostKeys.push(element.id)
    } else {
      if (typeof guestKeysForHosts[element.hostId] === 'undefined') {
        guestKeysForHosts[element.hostId] = []
      }

      guestKeysForHosts[element.hostId].push(element.id)
    }
  })
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

    if (typeof keyedTruffles[id] !== 'undefined') {
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

    if (typeof guestKeysForHosts[id] === 'undefined') {
      return false
    } else {
      return guestKeysForHosts[id].map(function (guestKey) {
        return this.getById(guestKey)
      }, this)
    }
  }
}
