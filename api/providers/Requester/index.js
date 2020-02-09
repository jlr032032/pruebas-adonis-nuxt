'use strict'

class Requester {

  constructor(Encrypter, Axios){
    this.Encrypter = Encrypter
    this.Axios = Axios
  }

  async get(url){
    try {
      return await this._request(url, 'get')
    } catch (error) {
      throw error
    }
  }

  async post(url, data){
    try {
      return await this._request(url, 'post', data)
    } catch (error) {
      throw error
    }

  }

  async put(url, data){
    try {
      return await this._request(url, 'put', data)
    } catch (error) {
      throw error
    }
  }

  async delete(url, data){
    try {
      return await this._request(url, 'delete', data)
    } catch (error) {
      throw error
    }
  }

  async _request(url, method, data){
    let config = { url, method }
    try {
      if (data!==undefined && data!==null)
        config.data = this.Encrypter.encrypt(data)
      const {status, data} = await this.Axios(config)
      return this._resObj(status, data)
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


