'use strict'

const User = use('App/Models/User')

class LoginController {

  async login({request, auth, response}){
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

  loginRedis({request}){
    return request.post()
  }

}

module.exports = LoginController
