let instance
class Cart {
  constructor () {
    if (!instance) {
      this.hoodies = 0
      instance = this
    }
    return instance
  }

  getInstance () {
    return this
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
