'use strict'

class Encrypter {

  constructor(){}

  encrypt(data){
    const encrypted = Buffer.from(JSON.stringify(data)).toString('base64')
    logger.debug(`Encrypted data: ${encrypted}`)
    return encrypted
  }

}

module.exports = Encrypter
