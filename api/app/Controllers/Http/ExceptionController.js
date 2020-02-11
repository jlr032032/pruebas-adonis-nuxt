'use strict'

class ExceptionController {

  index({response}){
    response.json({msg: 'message'})
  }

}

module.exports = ExceptionController
