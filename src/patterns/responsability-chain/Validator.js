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
export default Validator
