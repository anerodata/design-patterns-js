import UserNameValidator from './UserNameValidator.js'
import UserEmailValidator from './UserEmailValidator.js'
import ValidatorChainBuilder from './ValidatorChainBuilder.js'
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
