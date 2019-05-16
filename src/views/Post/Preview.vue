<template>
  <main>
    <h1>{{ post.title }}</h1>
    by <AuthorPreview :author="author" />
    <p>{{ post.body }}</p>
    <CommentList :comments="comments" />
  </main>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import CommentList from '@/components/CommentList.vue';
import AuthorPreview from '@/components/AuthorPreview.vue';

export default {
  name: 'PostPreview',
  components: { CommentList, AuthorPreview },
  computed: mapState({
    post: state => state.data.postDetails,
    comments: state => state.data.postComments,
    author: state => state.data.userDetails
  }),
  methods: mapActions(['getPostDetails', 'getPostComments', 'getUserDetails']),
  created () {
    const { id } = this.$route.params;
    this.getPostDetails({ id })
      .then((post) => {
        this.getUserDetails({ id: post.userId });
      });
    this.getPostComments({ id });
  }
}
</script>

<style>

</style>
