<template>
  <div class="truffle">
    <a :href="anchor"></a>
    <div class="date">{{date()}}</div>
    <dl>
      <template class="truffle-field" v-for="(value, key) in truffle" v-if="key != 'id' && key != 'hostId' && key != 'timestamp'">
        <dt>{{key}}</dt>
        <dd>{{value}}</dd>
      </template>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'Truffle',
  props: [ 'truffle' ],
  data () {
    return {
      anchor: '#' + this.truffle.id,
      date () {
        var isoDate = new Date(this.truffle.timestamp)
        return isoDate.toDateString()
      }
    }
  }
}
</script>