<template>
  <truffle v-bind:truffle="truffle" v-if="truffle"></truffle>
</template>

<script>
import Truffle from '@/components/Truffle'

export default {
  name: 'SingleTruffle',
  components: { Truffle },
  props: [ 'truffleId', 'truffles' ],
  data () {
    return {
      truffle: null
    }
  },
  mounted () {
    this.truffle = this.truffles.find(truff => {
      return truff.id === this.truffleId
    })
  }
}
</script>