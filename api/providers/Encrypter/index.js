'use strict'

class Encrypter {

  constructor(){}

  encrypt(data){
    const encrypted = Buffer.from(JSON.stringify(data)).toString('base64')
    return encrypted
  }

}

module.exports = Encrypter
