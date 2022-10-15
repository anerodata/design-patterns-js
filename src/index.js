import Fruit from './patterns/constructor/Fruit.js'
import Cart from './patterns/singleton/Cart.js'
import ValidatorService from './patterns/responsability-chain/ValidatorService.js'
import ConcreteSubject from './patterns/observer/ConcreteSubject.js'
import ConcreteObserver from './patterns/observer/ConcreteObserver.js'
import './styles/main.scss'

function initConstructor () {
  document.querySelector('#constructor-create-fruit')
    .addEventListener('click', (e) => {
      e.preventDefault()
      const typeEl = document.querySelector('#constructor-type-fruit')
      const originEl = document.querySelector('#constructor-origin-fruit')
      const fruit = new Fruit(typeEl.value, originEl.value)
      console.log(fruit, fruit.description())
    })
}

function initSingleton () {
  const cart = new Cart()
  const hoodiesInput = document.querySelector('#cart-hoodies-result')
  document.querySelector('#cart-add-hoodie')
    .addEventListener('click', (e) => {
      e.preventDefault()
      hoodiesInput.value = cart.incrementHoodies()
    })
  document.querySelector('#cart-remove-hoodie')
    .addEventListener('click', (e) => {
      e.preventDefault()
      if (hoodiesInput.value > 0) {
        hoodiesInput.value = cart.decrementHoodies()
      }
    })
}

function initObserver () {
  // References to our DOM elements
  const addBtn = document.getElementById('addNewObserver')
  const container = document.getElementById('observersContainer')
  const controlCheckbox = new ConcreteSubject(
    document.getElementById('mainCheckbox')
  )

  const addNewObserver = (e) => {
    e.preventDefault()
    // Create a new checkbox to be added
    const check = document.createElement('input')
    check.type = 'checkbox'
    const checkObserver = new ConcreteObserver(check)

    // Add the new observer to our list of observers
    // for our main subject
    controlCheckbox.addObserver(checkObserver)

    // Append the item to the container
    container.appendChild(check)
  }

  addBtn.onclick = addNewObserver
}

function initChainOfResponsability () {
  const validatorService = new ValidatorService()
  document.querySelector('#chain-of-responsability-input')
    .addEventListener('click', (e) => {
      e.preventDefault()
      const formData = {
        currentStep: 'ACCOUNT_INFO',
        accountInfo: {
          userName: document.querySelector('#name').value,
          userEmail: document.querySelector('#email').value
        }
      }
      console.log('validatorService.perfomValidation value is:', validatorService.perfomValidation(formData))
    })
}
initConstructor()
initSingleton()
initChainOfResponsability()
initObserver()
