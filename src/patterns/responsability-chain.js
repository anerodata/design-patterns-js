class Validator {
  isValid (model) {
    if (this.nextValidator !== undefined) {
      console.log('3. Next validator is', this.nextValidator)
      return this.nextValidator.isValid(model)
    }
    console.log('5. All is correct!')
    return true
  }

  setNextValidator (validator) {
    this.nextValidator = validator
  }
}
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
class ValidatorChainBuilder {
  constructor () {
    this.first = null
    this.last = null
  }

  add (validator) {
    console.log('Adding to the validation chain', validator)
    if (!this.first) {
      this.first = validator
      this.last = validator
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
    console.log(`1. Start validation step: ${step}:`, this.validators[step])
    return this.validators[step].isValid(wizardData)
  }
}
export default ValidatorService
