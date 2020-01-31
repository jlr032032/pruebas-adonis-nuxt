'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Decryption {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle(ctx, next) {
    if(ctx.request.hasBody()){
      const encrypted = ctx.request.post().data
      ctx.data = decrypt(encrypted)
    }
    await next()
  }
}

module.exports = Decryption

function decrypt(encrypted){
  return JSON.parse(
    Buffer.from(encrypted, 'base64').toString()
  )
}
