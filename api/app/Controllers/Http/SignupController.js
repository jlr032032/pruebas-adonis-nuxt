'use strict'

const User = use('App/Models/User')

class SignupController {
  async signup({request, response}){
    const userData = request.post()
    try {
      const user = await User.create(userData)
      return {
        status: 'success',
        data: user
      }
    } catch (error) {
      logger.error(error)
      return response.status(500).json({
        status: 'error',
        message: 'La petición no puede ser procesada en este momento, intente más tarde'
      })
    }

  }
}

module.exports = SignupController
