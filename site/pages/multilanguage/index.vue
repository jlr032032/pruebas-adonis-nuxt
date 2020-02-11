<template>
  <div>
    <h2 class="title">Multilenguaje</h2>
    <form>
      <div>
        <label>Recibir mensaje en</label>
        <select v-model="language">
          <option value="es">es</option>
          <option value="ec-01">ec-01</option>
        </select>
      </div>
      <input type="submit" @click="sendRequest">
    </form>
    <div class="result-container">
      <label>Resultado:</label>
      <input class="result-value" disabled v-model="result">
    </div>
  </div>
</template>

<style scoped>
  .result-container{
    margin-top: 50px;
  }
  .result-value{
    border: none;
    background-color: transparent;
    width: 100%;
  }
</style>

<script>
  import axios from 'Axios'
  export default {
    data(){
      return {
        language: 'es',
        result: null
      }
    },
    methods: {
      async sendRequest(event){
        event.preventDefault()
        try {
          const response = await axios.get(
            `http://127.0.0.1:3333/api/multilanguage?language=${this.language}`
          )
          console.log(response.data)
          this.result = response.data.message
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
</script>
