<template>
  <div class="truffle">
    <div>{{truffle.timestamp}}</div>
    <div>{{truffle.id}}</div>
  </div>
</template>

<script>
export default {
  name: 'Truffle',
  props: [ 'truffle' ]
}
</script>