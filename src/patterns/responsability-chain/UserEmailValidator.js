import Validator from './Validator.js'
class UserEmailValidator extends Validator {
  getUserEmail = model => model.accountInfo.userEmail
  isValid (model) {
    console.log('4. Validating user email with value:', this.getUserEmail(model))
    const userEmail = this.getUserEmail(model).trim()
    if (userEmail === '') {
      console.log('Error: Write a mail')
      return false
    }
    return super.isValid(model)
  }
}
export default UserEmailValidator
