<template>
  <div class="mt-2">
    <h5>{{label}}</h5>
    <blockquote v-if="fieldType == 'comment' || fieldType == 'recipe'">{{value}}</blockquote>
    <ul v-if="fieldType == 'array'">
      <li v-for="listItem in value">{{listItem}}</li>
    </ul>
    <a :href="value" v-if="fieldType == 'link'">{{value}}</a>
    <audio v-if="fieldType == 'podcast episode'" controls="controls" preload="none">
      <source :src="value"></source>
    </audio>
    <a :href="'https://www.biblegateway.com/passage/?version=NRSV&search=' + value" v-if="fieldType == 'bible passage'">{{value}}</a>
    <div v-if="fieldType == 'default'">{{value}}</div>
  </div>
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
      'recipe',
      'podcast episode',
      'bible passage',
      'link'
    ]

    var label = this.label.toLowerCase()

    if (knownTypes.includes(label)) {
      this.fieldType = label
    } else if (Array.isArray(this.value) === true) {
      this.fieldType = 'array'
    } else {
      this.fieldType = 'default'
    }
  }
}
</script>