'use strict'

class LoggedController {
  index(){
    return {
      status: 'success',
      message: 'Acceso permitido'
    }
  }
}

module.exports = LoggedController
