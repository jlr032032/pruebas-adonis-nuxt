'use strict'

const BusinessException = use('App/Exceptions/BusinessException')

function checkCredentials(username, password, response){
  const users = { jorge1:{username:'jorge1',password:'123',blocked:false} }
  const user = users[username]
  if(user && user.password===password)
    return user
  response.json({
    status: 'error',
    message: 'Invalid credentials'
  })
  throw new BusinessException()
}

function checkBlockedUser(user, response){
  if(user.blocked){
    response.json({
      status: 'error',
      message: 'Usuario bloqueado'
    })
    throw new BusinessException()
  }
}

class BusinessController {
  configurableFlow({request, response}){
    // Flujo 1 de login
    /*
      1. Validación de usuario y contraseña
      2. Validación de usuario bloqueado
      3. Validación de ip
      4. Envío de correo (sesión desde nueva ip)
      5. Validación de sesión activa existente
      6. Validación de cambio de contraseña requerido
      7. Inicio de sesión
      8. Envío de correo (sesión fallida desde nueva ip)
    */
    const {username, password} = request.post()
    try {
      const user = checkCredentials(username, password, response)
      checkBlockedUser(user)
      ipValidation('ip no confiable')
      return {
        status: 'success',
        message: 'Logged'
      }
    } catch (error) {
      console.log(error)
    }

    // Flujo 2 de login
    /*
      1. Validación de usuario y contraseña
      2. Validación de usuario bloqueado
      3. Validación de sesión activa existente
      4. Inicio de sesión
    */
  }
}

module.exports = BusinessController
