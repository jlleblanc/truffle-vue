<template>
  <span>
    <h4>{{label}}</h4>
    <blockquote v-if="type == 'comment'">{{value}}</blockquote>
    <ul v-if="type == 'array'">
      <li v-for="listItem in value">{{listItem}}</li>
    </ul>
    <a :href="value" v-if="type == 'link'">{{value}}</a>
    <span v-if="type == 'default'">{{value}}</span>
  </span>
</template>

<script>
export default {
  name: 'Field',
  props: [ 'label', 'value' ],
  data () {
    return {
      type: null
    }
  },
  mounted () {
    var knownTypes = [
      'comment',
      'link'
    ]

    if (knownTypes.includes(this.label)) {
      this.type = this.label
    } else if (Array.isArray(this.value)) {
      this.type = 'array'
    } else {
      this.type = 'default'
    }
  }
}
</script>