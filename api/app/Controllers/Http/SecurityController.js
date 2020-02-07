'use strict'

const Encrypter = use('Custom/Encrypter')

class SecurityController {

  encrypt({request, response}){
    const data = request.post()
    return response.json({
      encryptedData: Encrypter.encrypt(data)
    })
  }

}

module.exports = SecurityController
