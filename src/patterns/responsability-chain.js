class Validator {
  isValid (model) {
    if (this.nextValidator !== null) {
      return this.nextValidator.isValid(model)
    }
    return true
  }

  setNextValidator (validator) {
    this.nextValidator = validator
  }
}
class UserNameValidator extends Validator {
  getUserName = model => model.accountInfo.userName
  isValid (model) {
    const userName = this.getUserName(model).trim()
    if (userName === '') {
      console.log('Error: Escribe un nombre')
      return false
    }
    return super.isValid(model)
  }
}
class UserEmailValidator extends Validator {
  getUserEmail = model => model.accountInfo.userEmail
  isValid (model) {
    console.log(model)
    const userEmail = this.getUserEmail(model).trim()
    if (userEmail === '') {
      console.log('Error: Escribe un correo')
      return false
    }
    return super.isValid(model)
  }
}
class ValidatorChainBuilder {
  constructor () {
    this.first = null
    this.last = null
  }

  add (validator) {
    if (!this.first) {
      this.first = validator
      this.last = validator
      console.log(this)
    }
    this.last.setNextValidator(validator)
    this.last = validator
    return this
  }

  getFirst () {
    return this.first
  }
}
class ValidatorService {
  constructor () {
    this.validators = {
      ACCOUNT_INFO: new ValidatorChainBuilder()
        .add(new UserNameValidator())
        .add(new UserEmailValidator())
        .getFirst()
    }
  }

  perfomValidation (wizardData) {
    const step = wizardData.currentStep
    return this.validators[step].isValid(wizardData)
  }
}
export default ValidatorService
