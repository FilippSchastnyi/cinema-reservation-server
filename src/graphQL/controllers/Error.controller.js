class ErrorController {

  errorCreator(name, message){
    return {
      __typename: name,
      message
    }
  }

  get userError() {
    return{
      DUPLICATED_EMAIL: this.errorCreator('AccessError', 'This email address has already existed'),
      UNKNOWN_EMAIL : this.errorCreator('AccessError', 'This email address doesn`t exist'),
      INCORRECT_PASSWORD : this.errorCreator('AccessError', 'Password is not match'),
      UNEXPECTED_ERROR : this.errorCreator('UnexpectedError', 'Internal Error, please contact the admin :('),
    }
  }
}

export default new ErrorController()
