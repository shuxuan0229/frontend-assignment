<template>
  <div id="app">
    <Header />
    <Item />
  </div>
</template>

<script>
import Item from './components/Item.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Item,
    Header,
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
