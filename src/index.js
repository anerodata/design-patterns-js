import ValidatorService from './patterns/responsability-chain.js'
import './styles/main.scss'

function validateForm () {
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
      const validatorService = new ValidatorService()
      console.log(validatorService.perfomValidation(formData))
    })
}
validateForm()
