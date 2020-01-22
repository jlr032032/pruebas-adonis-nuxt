'use strict'

class SignupController {
  signup({request}){
    return request.post()
  }
}

module.exports = SignupController
