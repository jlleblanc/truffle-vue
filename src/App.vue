<template>
  <div id="app">
    <router-view v-bind:truffles="truffles" />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      truffles: []
    }
  },
  mounted () {
    fetch('http://truffle.jlleblanc.com/feed.json')
      .then(r => r.json())
      .then(json => {
        this.truffles = json
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
