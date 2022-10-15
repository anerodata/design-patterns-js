import ObserverList from './ObserverList'
class Subject {
  constructor () {
    this.observers = new ObserverList()
  }

  addObserver (observer) {
    this.observers.add(observer)
  }

  removeObserver (observer) {
    const index = this.observers.indexOf(observer, 0)
    this.observers.removeAt(index)
  }

  notify (context) {
    console.log(context)
    const observerCount = this.observers.count()
    for (let i = 0; i < observerCount; i++) {
      this.observers.get(i).update(context)
    }
  }
}
export default Subject
