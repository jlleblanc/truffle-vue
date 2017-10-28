<template>
  <div class="truffle">
    <a :href="anchor"></a>
    <div class="date">{{date()}}</div>
    <template v-for="(value, key) in truffle" v-if="key != 'id' && key != 'hostId' && key != 'timestamp'">
      <field v-bind:value="value" v-bind:label="key"></field>
    </template>
  </div>
</template>

<script>
import Field from '@/components/Field'

export default {
  name: 'Truffle',
  components: { Field },
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