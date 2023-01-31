class ErrorController {
  constructor() {
    this.ACCESS_ERROR = 'AccessError'
    this.UNEXPECTED_ERROR = 'UnexpectedError'
  }

  errorCreator(name, message){
    return {
      __typename: name,
      message
    }
  }

  get userError() {
    return{
      DUPLICATED_EMAIL: this.errorCreator(this.ACCESS_ERROR , 'This email address has already existed'),
      UNKNOWN_EMAIL : this.errorCreator(this.ACCESS_ERROR , 'This email address doesn`t exist'),
      INCORRECT_PASSWORD : this.errorCreator(this.ACCESS_ERROR , 'Password is not match'),
      UNEXPECTED_ERROR : this.errorCreator(this.UNEXPECTED_ERROR, 'Internal Error, please contact the admin :('),
    }
  }
}

export default new ErrorController()
