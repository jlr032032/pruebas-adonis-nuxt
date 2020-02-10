'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Joi = require('@hapi/joi')

class Validator {

  constructor(){
    logger.info('Middleware initialized: Validator')
  }

  /**
   * @param {object} ctx
   * @param {data} ctx.data
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    try {
      const internValidator = new InternValidator()
      internValidator.validate(request.data)
      logger.debug('Request data values are valid')
      await next()
    } catch (error) {
      logger.warning(`Request data values are invalid: ${error.details[0].message}`)
      return response
        .status(400)
        .json({status: 'error'})
    }
  }
}

module.exports = Validator

class InternValidator {

  constructor(){
    const alphanum = /^[a-z0-9]+$/i
    const password = /^[a-z0-9.,¡!¿\?+\-\*\/_#@]+$/i
    this.schema = Joi.object({
      username: this.pattern(alphanum),
      password: this.pattern(password)
    })
    this.config = {
      allowUnknown: true
    }
  }

  pattern(pattern){
    return Joi.string().pattern(pattern)
  }

  validate(data){
    Joi.attempt(data, this.schema, this.config)
  }

}
