<template>
  <div class="comment-list">
    <h3 class="title">Comments</h3>
    <ul>
      <li v-for="comment in comments" :key="comment.id" class="comment">
        <h4 class="comment-header">{{comment.name}} - {{comment.email}}</h4>
        <p class="comment-content">{{comment.body}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CommentList',
  props: {
    comments: Array
  }
}
</script>

<style>
.comment-list ul {
  list-style-type: none;
  padding: 0;
  font-size: 0.8em;
}

.comment-list .title {
  color: gray;
}

.comment-list .comment {
  margin-bottom: 1em;
}

.comment-list .comment-header, .comment-list .comment-content {
  margin: 0;
}
</style>
