'use strict'

class ResponseSimulatorController {

  index({request, response}){
    const { status } = request.get()
    console.log(`Petición de respuesta con código HTTP ${status}`)
    const reqBody = { message: 'Here goes server feedback' }
    if(status)
      response.status(status)
    return response.json(reqBody)
  }

}

module.exports = ResponseSimulatorController
