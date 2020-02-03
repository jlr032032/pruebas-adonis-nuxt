'use strict'

const Joi = require('@hapi/joi')

class LoginController {

  constructor(){
    logger.info('Controller initialized: LoginController')
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
    const valid = validateStructure(structure, data, response)
    if(valid)
      return data
  }

}

module.exports = LoginController

function validateStructure(structure, data, response){
  try {
    Joi.attempt(data, structure)
    logger.debug(`Request structure is valid`)
    return true
  } catch (error) {
    logger.warning(`Request structure is not valid: ${error.details[0].message}`)
    response.status(400).json({
      status: 'error'
    })
    return false
  }
}
