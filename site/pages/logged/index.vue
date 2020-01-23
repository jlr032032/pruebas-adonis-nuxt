<template>
  <h2>Bienvenido, esta ruta solo es accesible por usuarios con sesión activa</h2>
</template>

<script>
  import axios from 'Axios'
  export default {
    data(){
      return {
        message: "Debes tener sesión activa para esta ruta"
      }
    },
    async mounted(){
      const response = await axios.post(
				'http://127.0.0.1:3333/api/logged',
      )
      console.log(response)
    }
  }
</script>
