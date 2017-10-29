<template>
  <div class="truffle">
    <a :href="anchor"></a>
    <div class="date">{{date()}}</div>
    <template v-for="(value, key) in truffle" v-if="!skippedFields.includes(key)">
      <field v-bind:value="value" v-bind:label="key"></field>
    </template>
    <template v-if="hasTags">
      <h4>Tags</h4>
      <ul>
        <li v-for="(tagValue, tagKey) in tags">{{tagKey}}</li>
      </ul>
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