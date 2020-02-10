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
      <div>
        <input type="checkbox" v-model="unexpectedData">
        <label>Enviar campo adicional no esperado por el API</label>
      </div>
      <input type="submit" @click="login">
    </form>
  </div>
</template>

<script>
  import request from '~/plugins/request.js'
  export default {
    data(){
      return {
        username: '',
        password: '',
        unexpectedData: false
      }
    },
    mixins: [
      request
    ],
    methods: {
      async login(event){
        event.preventDefault()
        let data = {
          username: this.username,
          password: this.password,
        }
        if(this.unexpectedData)
          data.unexpectedData = 'Dato no esperado por el API'
        console.log('\n\nData sin cifrar:', data)
        try{
          const response = await this.request('http://127.0.0.1:3333/api/login/redis', 'post', data)
          console.log(response)
          //this.$store.commit('token/setToken', response.data.data.token)
        }catch(error){
          console.log(error)
        }finally{
          this.username = this.password = ''
          this.unexpectedData = false
        }
      }
    }
  }
</script>
