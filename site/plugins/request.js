'use strict'

import axios from 'Axios'

let mixins = {
  methods: {
    async request(url, method, data){
      let config = {
        method,
        url
      }
      if(data!==undefined && data!==null)
        config.data= { data: btoa(JSON.stringify(data)) }
      const response = await axios(config)
      return response
    }
  }
}

export default mixins
