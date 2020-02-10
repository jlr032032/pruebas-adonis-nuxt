<template>
  <div>
    <h2 class="title">Envío de peticiones desde API intermediaria</h2>
    <form>
      <div>
        <label>Método HTTP</label>
        <select v-model="method">
          <option value='get'>Get</option>
          <option value='post'>Post</option>
          <option value='put'>Put</option>
          <option value='delete'>Delete</option>
        </select>
      </div>
      <div>
        <label>Código de estado HTTP que se desea recibir</label>
        <input type="number" min="100" max="512" v-model="status">
      </div>
      <input type="submit" @click="sendFromAPI">
    </form>
  </div>
</template>

<script>
  import axios from 'Axios'
  export default {
    data(){
      return {
        method: 'get',
        status: 200
      }
    },
    methods: {
      async sendFromAPI(event){
        event.preventDefault()
        try {
          const response = await axios.get(
            `http://127.0.0.1:3333/api/login/requester?method=${this.method}&status=${this.status}`
          )
          console.log(response.data)
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
</script>
