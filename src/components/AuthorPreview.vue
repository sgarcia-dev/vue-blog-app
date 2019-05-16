<template>
  <span class="author-preview">
    <a :href="author.website">{{author.name}}</a>
  </span>
</template>

<script>
export default {
  name: 'AuthorPreview',
  props: {
    author: Object
  }
}
</script>

<style>

</style>
