<template>
  <div id="truffle-list">
    <template v-for="truffle in truffles">
      <truffle v-if="!truffle.hostId" v-bind:truffle="truffle"></truffle>
    </template>
  </div>
</template>

<script>
import Truffle from '@/components/Truffle'

export default {
  name: 'List',
  components: { Truffle },
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