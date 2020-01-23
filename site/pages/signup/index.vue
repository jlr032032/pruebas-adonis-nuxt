<template>
  <div>
    <h2 class="title">Registro de usuario</h2>
    <form>
      <div>
        <label>Usuario</label>
        <input type="text" v-model="username">
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password" v-model="password">
      </div>
      <input type="submit" @click="signup">
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
      async signup(event){
        event.preventDefault()
        const response = await axios.post(
					'http://127.0.0.1:3333/api/signup',
					{
						username: this.username,
						password: this.password
					}
				)
        console.log(response)
        this.username = this.password = null
      }
    }
  }
</script>
