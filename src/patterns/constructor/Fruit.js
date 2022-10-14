class Fruit {
  constructor (type, origin) {
    this.type = type
    this.origin = origin
  }
}
Fruit.prototype.description = function () {
  return `I am a ${this.type} from ${this.origin}`
}

export default Fruit
