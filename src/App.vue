<template>
  <div id="app">
    <CreatePage/>
  </div>
</template>

<script>
import CreatePage from './components/CreatePage.vue'

export default {
  name: 'App',
  components: {
    CreatePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px auto;
  width: 300px;
}
  @media all and (max-width: 450px) {
    #app{
      margin: 50px auto;
      width: 260px;
      font-size: 16px;
    }
  }
</style>
