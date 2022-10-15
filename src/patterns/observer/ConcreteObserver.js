import Observer from './Observer.js'
class ConcreteObserver extends Observer {
  constructor (element) {
    super()
    this.element = element
  }

  // Override with custom update behaviour
  update (value) {
    this.element.checked = value
  }
}
export default ConcreteObserver
