<template>
  <div>
    <h2 class="title">Flujo configurable</h2>
    <div>
      <form>
        <button @click="performConfFlow(1)">Flujo 1</button>
        <button @click="performConfFlow(2)">Flujo 2</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
  button{
    display: block;
    margin-bottom: 10px
  }
</style>

<script>
  import axios from 'Axios'
  export default {
    methods: {
      async performConfFlow(event, flowId){
        event.preventDefault()
        const response = await axios.get(`http://127.0.0.1:3333/api/configurable-flow/${flowId}`)
        console.log(response)
      }
    }
  }
</script>
