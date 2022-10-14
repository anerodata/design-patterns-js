import Fruit from './patterns/constructor/Fruit.js'
import Cart from './patterns/singleton/Cart.js'
import ValidatorService from './patterns/responsability-chain/ValidatorService.js'
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

function initCart () {
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

function validateForm () {
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
initCart()
validateForm()
