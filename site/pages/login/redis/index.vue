<template>
  <div>
    <h2 class="title">Login personalizado con Redis</h2>
    <form>
      <div>
        <label>Usuario</label>
        <input type="text" v-model="username">
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password" v-model="password">
      </div>
      <input type="submit" @click="login">
    </form>
  </div>
</template>

<script>
  import axios from 'Axios'
  export default {
    data(){
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      async login(event){
        event.preventDefault()
        let data = {
          username: this.username,
          password: this.password,
          other: 'value'
        }
        console.log('\n\nData sin cifrar:', data)
        try{
          const response = await this.request('http://127.0.0.1:3333/api/login/redis', 'post', data)
          console.log(response)
          //this.$store.commit('token/setToken', response.data.data.token)
        }catch(error){
          console.log(error)
        }finally{
          this.username = this.password = ''
        }
      },
      encrypt(data){
        return btoa(JSON.stringify(data))
      },
      async request(url, method, data){
        const _data = this.encrypt(data)
        console.log('Data cifrada:', _data)
        const response = await axios({
          method,
          url,
          data: { data: this.encrypt(data) }
        })
        return response
      }
    }
  }
</script>
