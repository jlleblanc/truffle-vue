<template>
  <div class="truffle m-3 p-3 border rounded">
    <div class="date"><router-link :to="{ name: 'Truffle', params: { truffleId: truffleId } }">{{date()}}</router-link></div>
    <template v-for="(value, key) in truffle" v-if="!skippedFields.includes(key)">
      <field v-bind:value="value" v-bind:label="key"></field>
    </template>
    <template v-if="hasTags">
      <h5>tags</h5>
      <p>
        <span v-for="(tagValue, tagKey) in tags" class="badge badge-pill badge-success mr-1">{{tagKey}}</span>
      </p>
    </template>
  </div>
</template>

<script>
import Field from '@/components/Field'

export default {
  name: 'Truffle',
  components: { Field },
  props: [ 'truffle', 'guests' ],
  data () {
    return {
      truffleId: this.truffle.id,
      skippedFields: ['id', 'hostId', 'timestamp'],
      tags: {},
      hasTags: false,
      date () {
        var isoDate = new Date(this.truffle.timestamp)
        return isoDate.toDateString()
      }
    }
  },
  mounted () {
    for (var fieldKey in this.truffle) {
      if (this.truffle.hasOwnProperty(fieldKey)) {
        var fieldValue = this.truffle[fieldKey]
        if (typeof (fieldValue) === 'boolean') {
          this.skippedFields.push(fieldKey)
          this.tags[fieldKey] = fieldValue
          this.hasTags = true
        }
      }
    }
  }
}
</script>