'use strict'

class LoginController {

  login({request}){
    return request.post()
  }

}

module.exports = LoginController
