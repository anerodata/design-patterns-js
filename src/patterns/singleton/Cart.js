let instance
class Cart {
  constructor () {
    if (!instance) {
      this.hoodies = 0
      instance = this
    }
    return instance
  }

  incrementHoodies () {
    return ++this.hoodies
  }

  decrementHoodies () {
    return --this.hoodies
  }
}
Object.freeze(Cart)
export default Cart
