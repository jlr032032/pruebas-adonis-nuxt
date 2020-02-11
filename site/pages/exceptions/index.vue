<template>
  <div>
    <h2 class="title">Excepciones de AdonisJs</h2>
    <form>
      <input type="submit" @click="sendRequest">
    </form>
  </div>
</template>

<script>
  import axios from 'Axios'
  export default {
    methods: {
      async sendRequest(event){
        event.preventDefault()
        try {
          const response = await axios.get('http://127.0.0.1:3333/api/exception')
          console.log(response.data)
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
</script>
