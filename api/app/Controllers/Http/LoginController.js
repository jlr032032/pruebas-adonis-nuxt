'use strict'

const Joi = require('@hapi/joi')

class LoginController {

  constructor(){
    logger.info('Controller initialized: Login')
  }

  async inbuiltLogin({request, auth, response}){
    try {
      const token = await auth.attempt(
        request.input('username'),
        request.input('password')
      )
      return response.json({
        status: 'success',
        data: token
      })
    } catch (error) {
      logger.error(error)
      response.status(500).json({
        status: 'error',
        message: 'Combinación incorrecta de usuario y contraseña'
      })
    }
    return request.post()
  }

  async redisLogin({data, response}){
    const structure = Joi.object({
      username: Joi.required(),
      password: Joi.required()
    })
    const valid = validateStructure('redisLogin', structure, data, response)
    if(valid)
      return data
  }

}

module.exports = LoginController

function validateStructure(caller, structure, data, response){
  try {
    Joi.attempt(data, structure)
    logger.debug(`${caller} function - Request structure is valid`)
    return true
  } catch (error) {
    logger.warning(`${caller} - Request structure is not valid: ${error.details[0].message}`)
    response.status(400).json({
      status: 'error'
    })
    return false
  }
}
