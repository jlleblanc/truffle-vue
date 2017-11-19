<template>
  <div>
    <truffle v-bind="{ truffle: truffle, guests: guests }" v-if="truffle"></truffle>
    <div class="m-3 p-3" v-if="guests !== false">
      <h5>guests</h5>

      <truffle v-for="guestTruffle in guests" v-bind:truffle="guestTruffle" :key="guestTruffle.id"></truffle>
    </div>
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
      truffle: null,
      guests: false
    }
  },
  mounted () {
    this.truffle = this.truffles.getById(this.truffleId)
    this.guests = this.truffles.getGuestsByHostId(this.truffleId)
  }
}
</script>