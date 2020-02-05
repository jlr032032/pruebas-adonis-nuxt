'use strict'

const Joi = require('@hapi/joi')
const model = use('App/Models/Login.js')

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

  async redisLogin({request, response}){
    const structure = Joi.object({
      username: Joi.required(),
      password: Joi.required()
    })
    try{
      validateStructure(structure, request.data, response)
      const user = model.checkCredentials(request.data, response)
      model.checkBlockedUser(user, response)
      logger.notice('Successful login')
      responseBody = {
        status: 'success',
        message: 'Successfuly logged in'
      }
      response.status(200).json(responseBody)
    }catch(error){
      response.status(response.data.httpStatus).json(response.data.body)
    }
  }

}

module.exports = LoginController

function validateStructure(structure, data, response){
  try {
    Joi.attempt(data, structure)
    logger.debug('Request structure is valid')
  } catch (error) {
    logger.notice(`Request structure is not valid: ${error.details[0].message}`)
    response.data = {
      httpStatus: 400,
      body: {
        status: 'error',
        message: 'Invalid request structure'
      }
    }
    throw new Error('RequestStructureError')
  }
}
