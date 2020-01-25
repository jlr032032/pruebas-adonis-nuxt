'use strict'

const redis = use('Redis')

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

  async loginRedis({request, response}){
    const redis = use('Redis')
    try {
      const token = String(Date.now())
      const userData = JSON.stringify({})
      const result = await redis.set(token, userData)
      console.log(result)
      return { token }
    } catch (error) {
      console.log(error)
      return response.status(500).json({
        status: 'error',
        message: 'Su petición no puede procesarse en este momento, inténtelo más tarde'
      })
    }
  }

}

module.exports = LoginController
