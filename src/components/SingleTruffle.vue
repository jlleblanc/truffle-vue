<template>
  <div>
    <truffle v-bind:truffle="truffle" v-if="truffle"></truffle>
    <div class="container-fluid">
      <router-link :to="{ name: 'List' }">🔙 return to list</router-link>
    </div>
  </div>
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