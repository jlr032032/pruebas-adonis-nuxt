'use strict'

class RequesterController {

  index({request, response}){
    const {method, status} = request.get()
    response.json({method, status})
  }

}

module.exports = RequesterController
