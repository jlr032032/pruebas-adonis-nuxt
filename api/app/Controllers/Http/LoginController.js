'use strict'

const User = use('App/Models/User')

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

  redisLogin({data}){
    return data
  }

}

module.exports = LoginController
