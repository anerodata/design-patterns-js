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
export default ValidatorChainBuilder
