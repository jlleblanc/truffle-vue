<template>
  <div id="truffle-list" class="container-fluid">
    <template v-for="truffleId in truffles.getHostTruffleKeys()">
      <!-- <truffle v-bind:truffle="truffles.getById(truffleId)" v-bind:guests="truffles.getGuestsByHostId(truffleId)"></truffle> -->
      <truffle v-bind="{ truffle: truffles.getById(truffleId), guests: truffles.getGuestsByHostId(truffleId) }"></truffle>
    </template>
  </div>
</template>

<script>
import Truffle from '@/components/Truffle'

export default {
  name: 'List',
  components: { Truffle },
  props: [ 'truffles' ]
}
</script>