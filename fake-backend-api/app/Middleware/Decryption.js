'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Decryption {

  constructor(){
    console.log('Middleware initialized: Decryption')
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({request, response}, next) {
    try {
      if(request.hasBody()){
        const encrypted = request.post().data
        request.data = decrypt(encrypted)
        console.log(`Decrypted data: ${JSON.stringify(request.data)}`)
      }
      await next()
    } catch (error) {
      console.log(`Request data is in a format that couldn't be decrypted`)
      return response.status(400).json({
        status: 'error'
      })
    }
  }
}

module.exports = Decryption

function decrypt(encrypted){
  let decrypted = Buffer.from(encrypted, 'base64').toString()
  decrypted = JSON.parse(decrypted)
  return decrypted
}
