'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Decryption {

  constructor(){
    logger.info('Middleware initialized: Decryption')
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle(ctx, next) {
    try {
      if(ctx.request.hasBody()){
        const encrypted = ctx.request.post().data
        ctx.data = decrypt(encrypted)
      }
      await next()
    } catch (error) {
      log.error(error)
      return ctx.response.status(500).json({
        status: 'error'
      })
    }
  }
}

module.exports = Decryption

function decrypt(encrypted){
  let decrypted = Buffer.from(encrypted, 'base64').toString()
  logger.debug(`decrypt function - Decrypted data: ${decrypted}`)
  decrypted = JSON.parse(decrypted)
  return decrypted
}
