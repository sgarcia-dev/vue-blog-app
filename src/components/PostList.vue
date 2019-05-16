<template>
  <ul class="post-list">
    <li v-for="post in posts" :key="post.id">
      <h4 class="heading" @click="previewPost(post)">{{ post.title }}</h4>
      <p>{{ post.body }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    posts: Array
  },
  methods: {
    previewPost (post) {
      this.$router.push({
        name: 'postPreview',
        params: { id: post.id }
      })
    }
  }
}
</script>

<style>
.post-list {
  list-style-type: none;
  padding: 0;
}

.post-list li {
  margin: 3rem;
}

.post-list .heading, .post-list p {
  margin: 0;
}

.post-list .heading {
  cursor: pointer;
  transition: 0.3s color;
}

.post-list .heading:hover {
  color: #42b983;
}

</style>
