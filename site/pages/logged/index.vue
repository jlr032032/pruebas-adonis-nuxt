<template>
  <h2>{{message}}</h2>
</template>

<script>
  import axios from 'Axios'
  export default {
    data(){
      return {
        message: "Ruta restringida"
      }
    },
    async mounted(){
      console.log('Enviando el token: ', this.$store.state.token.token)
      try {
        const response = await axios({
          method: 'post',
          url: 'http://127.0.0.1:3333/api/logged',
          data: {},
          headers: {
            Authorization: `Bearer ${this.$store.state.token.token}`
          }
        })
        this.message = "Bienvenido"
      } catch (error) {
        const status = error.response.data.error.status
        switch(error.response.data.error.status){
          case 401:
            this.message = 'No autorizado para acceder a esta ruta'
            break
          default:
            this.message = 'No es posible atender la solicitud en este momento. Por favor inténtelo de nuevo'
        }
      }
    }
  }
</script>
