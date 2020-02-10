'use strict'

class Login {

  constructor(){
    logger.info('Model initialized: Login')
  }

  checkCredentials({username, password}, response){
    const users = { jorge1: { username:'jorge1', password:'123', blocked:false } }
    const user = users[username]
    if(user && user.password===password){
      logger.debug('User and password combination is correct')
      return user
    }
    response.data = {
      httpStatus: 401,
      body: {
        status: 'error',
        message: 'Invalid credentials'
      }
    }
    logger.notice('The given combination of username and password for loggin is invalid')
    throw new Error('LogginCredentialsError')
  }

  checkBlockedUser(user, response){
    if(user.blocked){
      response.data = {
        httpStatus: 403,
        body: {
          status: 'error',
          message: 'User blocked'
        }
      }
      logger.notice('The user is blocked')
      throw new Error('BlockedUserError')
    }
    logger.debug('User is not blocked')
  }

}

module.exports = new Login()
