<template>
  <div>
    <h2 class="title">Multilenguaje</h2>
    <form>
      <div>
        <label>Recibir mensaje en</label>
        <select v-model="language">
          <option value="ec-01">ec-01</option>
          <option value="ve-01">ve-01</option>
        </select>
      </div>
      <input type="submit" @click="sendRequest">
    </form>
    <div class="result-container" v-for="(key, value) of messages" :key="key">
      <label>{{key}}</label>
      <input class="result-value" disabled :value="value">
    </div>
  </div>
</template>

<style scoped>
  .result-container{
    margin-top: 20px
  }
  .result-value{
    margin: 0;
    border: none;
    background-color: transparent;
    width: 100%
  }
</style>

<script>
  import axios from 'Axios'
  export default {
    data(){
      return {
        language: 've-01',
        messages: {}
      }
    },
    methods: {
      async sendRequest(event){
        event.preventDefault()
        try {
          const response = await axios.get(
            `http://127.0.0.1:3333/api/multilanguage?language=${this.language}`
          )
          this.messages = response.data
          console.log(response)
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
</script>
