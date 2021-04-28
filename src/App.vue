<template>
  <div id="app">
    <HeaderComponent />
    <ItemComponent />
  </div>
</template>

<script>
import ItemComponent from './components/ItemComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'app',
  components: {
    ItemComponent,
    HeaderComponent
  }
}
</script>

<style>

body,html {
  margin: 0;
  background: #D9ECFF;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: #2c3e50;
}

</style>
