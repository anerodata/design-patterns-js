class ObserverList {
  constructor () {
    this.observerList = []
  }

  add (obj) {
    this.observerList.push(obj)
  }

  count () {
    return this.observerList.length
  }

  get (index) {
    if (index > -1 && index < this.observerList.length) {
      return this.observerList[index]
    }
  }

  indexOf (obj) {
    for (let i = 0; i < this.observerList.length; i++) {
      if (this.observerList[i] === obj) {
        return i
      }
    }
    return -1
  }

  removeAt (index) {
    this.observerList.slice(index, 1)
  }
}
export default ObserverList
