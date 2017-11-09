// fetch the truffles

// key the truffles
// map host-guest truffles

// provide method for getting all host truffles
// provide method for getting a host's guest truffles

export default class {
  constructor(url) {
    this.url = url
    this.keyedTruffles = {}
    this.hostKeys = []
  }

  getHosts () {
    // returns an array of host truffles
  }

  getById(id) {
    // returns a single truffle for the given id
  }

  getGuestsById(id) {
    // returns an array of guest truffles for the given id
  }
}