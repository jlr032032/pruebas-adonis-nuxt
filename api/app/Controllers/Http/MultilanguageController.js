'use strict'

class MultilanguageController {

  index({request, antl, response}){
    try {
      const { language } = request.get()
      antl.switchLocale(language)
      response.json({
        helloWorldMsg: antl.formatMessage('vocabulary.HELLO_WORLD'),
        generalMsg: antl.formatMessage('vocabulary.GENERAL_MSG')
      })
    } catch (error) {
      console.log(error)
    }
  }

}

module.exports = MultilanguageController
