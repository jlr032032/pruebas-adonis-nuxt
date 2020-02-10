<template>
  <div>
    <h2 class="title">Login incorporado en AdonisJs</h2>
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
        username: null,
        password: null
      }
    },
    methods: {
      async login(event){
        event.preventDefault()
        const response = await axios.post(
					'http://127.0.0.1:3333/api/login/inbuilt',
					{
						username: this.username,
						password: this.password
					}
				)
        this.$store.commit('token/setToken', response.data.data.token)
        this.username = this.password = null
      }
    }
  }
</script>
