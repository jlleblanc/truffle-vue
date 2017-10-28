<template>
  <span>
    <h4>{{label}}</h4>
    <blockquote v-if="fieldType == 'comment'">{{value}}</blockquote>
    <ul v-if="fieldType == 'array'">
      <li v-for="listItem in value">{{listItem}}</li>
    </ul>
    <a :href="value" v-if="fieldType == 'link'">{{value}}</a>
    <span v-if="fieldType == 'default'">{{value}}</span>
  </span>
</template>

<script>
export default {
  name: 'Field',
  props: [ 'label', 'value' ],
  data () {
    return {
      fieldType: null
    }
  },
  mounted () {
    var knownTypes = [
      'comment',
      'link'
    ]

    if (knownTypes.includes(this.label)) {
      this.fieldType = this.label
    } else if (Array.isArray(this.value)) {
      this.fieldType = 'array'
    } else {
      this.fieldType = 'default'
    }
  }
}
</script>