'use strict'

class Requester {

  constructor(Encrypter, Axios){
    logger.info('Initializing provider: Requester')
    this.Encrypter = Encrypter
    this.Axios = Axios
  }

  async get(url){
    try {
      return await this._request(url, 'GET')
    } catch (error) {
      throw error
    }
  }

  async post(url, data){
    try {
      return await this._request(url, 'POST', data)
    } catch (error) {
      throw error
    }

  }

  async put(url, data){
    try {
      return await this._request(url, 'PUT', data)
    } catch (error) {
      throw error
    }
  }

  async delete(url, data){
    try {
      return await this._request(url, 'DELETE', data)
    } catch (error) {
      throw error
    }
  }

  async _request(url, method, data){
    let config = { url, method }
    try {
      if (data!==undefined && data!==null)
        config.data = this.Encrypter.encrypt(data)
      logger.debug(`Sending ${method} request to ${url}`)
      const response = await this.Axios(config)
      return this._resObj(response.status, response.data)
    } catch (error) {
      if (error.response)
        return this._resObj(error.response.status, error.response.data)
      else if (error.request)
        return this._resObj(500)
      else
        throw error
    }
  }

  _resObj(status, data){
    let resObj = { status }
    if (data)
      resObj.data = data
    return resObj
  }

}

module.exports = Requester
