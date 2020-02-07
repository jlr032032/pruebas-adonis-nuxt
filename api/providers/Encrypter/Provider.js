const { ServiceProvider } = require('@adonisjs/fold')

class EncrypterProvider extends ServiceProvider{
  register(){
    this.app.singleton('Custom/Encrypter', () => {
      return new (require('.'))()
    })
  }
}

module.exports = EncrypterProvider
