import responsability from './patterns/responsability-chain.js'
import './styles/main.scss'

function app () {
  document.querySelector('#chain-of-responsability-input')
    .addEventListener('click', (e) => {
      e.preventDefault()
    })
}
app()
console.log(app)
console.log(responsability)
