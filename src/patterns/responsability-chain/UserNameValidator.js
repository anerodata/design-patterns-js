import Validator from './Validator.js'
class UserNameValidator extends Validator {
  getUserName = model => model.accountInfo.userName
  isValid (model) {
    console.log('2. Validating user name with value:', this.getUserName(model))
    const userName = this.getUserName(model).trim()
    if (userName === '') {
      console.log('Error: Write a name')
      return false
    }
    return super.isValid(model)
  }
}
export default UserNameValidator
