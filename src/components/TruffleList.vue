<template>
  <div>
    <div v-for="truffle in truffles" :data="truffle">
      <div v-if="!truffle.hostId">
        {{truffle.id}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      truffles: []
    }
  },
  mounted () {
    fetch('/static/feed.json')
      .then(r => r.json())
      .then(json => {
        this.truffles = json
      })
  }
}
</script>