'use strict'

class MultilanguageController {

  index({request, antl, response}){
    try {
      const { language } = request.get()
      antl.switchLocale(language)
      response.json({message: antl.formatMessage('vocabulary.HELLO_WORLD')})
    } catch (error) {
      console.log(error)
    }
  }

}

module.exports = MultilanguageController
