'use strict'

const User = use('App/Models/User')

class LoginController {

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
      console.log(error)
      response.status(500).json({
        status: 'error',
        message: 'Combinación incorrecta de usuario y contraseña'
      })
    }
    return request.post()
  }

  redisLogin({request}){
    try {
      return request.post()
    } catch (error) {
      console.log(error)
      return { status: 'error' }
    }
  }

}

module.exports = LoginController
