<template>
  <truffle v-bind:truffle="truffle" v-if="truffle"></truffle>
</template>

<script>
import Truffle from '@/components/Truffle'

export default {
  name: 'SingleTruffle',
  components: { Truffle },
  props: [ 'truffleId' ],
  data () {
    return {
      truffle: null
    }
  },
  mounted () {
    fetch('http://truffle.jlleblanc.com/feed.json')
      .then(r => r.json())
      .then(json => {
        this.truffle = json.find(truff => {
          return truff.id === this.truffleId
        })
      })
  }
}
</script>