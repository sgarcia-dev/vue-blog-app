<template>
  <main>
    <h1>Dashboard</h1>
    <PostList :posts="posts" />
  </main>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import PostList from '../components/PostList.vue';

export default {
  name: 'Dashboard',
  components: { PostList },
  computed: mapState({
    posts: state => state.data.posts
  }),
  methods: {
    ...mapActions(['getPosts'])
  },
  created () {
    this.getPosts();
  }
};
</script>

<style>

</style>
