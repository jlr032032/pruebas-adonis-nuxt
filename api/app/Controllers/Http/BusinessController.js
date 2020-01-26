'use strict'

class BusinessController {
  configurableFlow({response}){
    return response.json({
      status: 'success'
    })
  }
}

module.exports = BusinessController
