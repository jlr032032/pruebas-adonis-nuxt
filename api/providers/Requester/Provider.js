const { ServiceProvider } = require('@adonisjs/fold')

class RequesterProvider extends ServiceProvider{
  register(){
    this.app.singleton('Custom/Requester', () => {
      const Encrypter = this.app.use('Custom/Encrypter')
      const Axios = this.app.use('Axios')
      return new (require('.'))(Encrypter, Axios)
    })
  }
}

module.exports = RequesterProvider
