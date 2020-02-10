'use strict'

const requester = use('Custom/Requester')

class RequesterController {

  async index({request, response}){
    const {status} = request.get()
    try {
      const result = await requester.get(`http://localhost:3334/backend-api/response?status=${status}`)
      logger.debug(`Request result: ${JSON.stringify(result)}`)
      return response.json(result)
    } catch (error) {
      logger.error(error.stack)
      return { error: 'error' }
    }
  }

}

module.exports = RequesterController
