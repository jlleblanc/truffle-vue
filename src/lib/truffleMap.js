// A class for parsing an Array of truffles into a Map
// If we decide to use this in the future, it will need some serious work. This
// is just a proof of concept.
export default class TruffleMap extends Map {
  static parse (json) {
    let instance = new TruffleMap()
    instance.setTruffles(json)
    return instance
  }

  setTruffles (json) {
    for (var element of json) {
      this.set(element.id, element)
    }
  }
}
