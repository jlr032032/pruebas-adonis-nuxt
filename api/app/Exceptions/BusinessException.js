'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class BusinessException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  // handle(error, { response }) {
  //   console.log(error)
  //   return response.json({
  //     status: 'error',
  //     message: 'business error'
  //   })
  // }
}

module.exports = BusinessException
