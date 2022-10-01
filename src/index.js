import ValidatorService from './patterns/responsability-chain/ValidatorService.js'
import './styles/main.scss'

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
validateForm()
