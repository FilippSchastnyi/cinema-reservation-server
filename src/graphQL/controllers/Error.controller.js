import error from "../../constants/error.js";

class ErrorHandlerController {

  userErrorHandler(type) {
    const defaultError = {
      __typename: 'UnexpectedError',
      message: "Internal Error, please contact the admin :(",
    }
    switch (type) {
      case error.UNKNOWN_EMAIL:
       return  {
          __typename: 'AccessError',
            message: 'This email address doesn`t exist',
        }
      case error.INCORRECT_PASSWORD:
        return  {
          __typename: 'AccessError',
          message: 'Password is not match',
        }
      case error.DUPLICATED_EMAIL:
        return  {
          __typename: 'AccessError',
          message: 'This email address has already existed',
        }
      case error.UNEXPECTED_ERROR:
        return  defaultError
      default:
        return  defaultError
    }
  }
}

export default new ErrorHandlerController()
