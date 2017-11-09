<template>
  <div id="truffle-list" class="container-fluid">
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
  props: [ 'truffles' ]
}
</script>