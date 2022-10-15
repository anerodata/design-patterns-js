import Subject from './Subject.js'
class ConcreteSubject extends Subject {
  constructor (element) {
    super()
    this.element = element
    this.element.onclick = () => {
      this.notify(this.element.checked)
    }
  }
}
export default ConcreteSubject
