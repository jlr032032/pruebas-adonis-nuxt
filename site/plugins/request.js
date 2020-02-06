'use strict'

import encrypt from './encrypt.js'
import axios from 'Axios'

let mixins = {
  methods: {
    async request(url, method, data){
      let config = {
        method,
        url
      }
      if(data!==undefined && data!==null)
        config.data= encrypt(data)
      const response = await axios(config)
      return response
    }
  }
}

export default mixins
