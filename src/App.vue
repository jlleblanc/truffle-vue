<template>
  <div id="app">
    <router-view v-bind:truffles="truffles" />
  </div>
</template>

<script>
// import Truffles from '@/lib/truffles'

export default {
  name: 'app',
  props: [ 'truffles' ]
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.date a {
  color: inherit;
}
</style>
