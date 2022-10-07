let instance
let hoodies = 0
class Cart {
  constructor () {
    if (instance) {
      throw new Error('A singleton cart is only created once')
    }
    instance = this
  }

  getInstance () {
    return this
  }

  incrementHoodies () {
    return ++hoodies
  }

  decrementHoodies () {
    return --hoodies
  }
}
Object.freeze(Cart)
export default Cart
