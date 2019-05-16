<template>
  <ul class="user-list">
    <li v-for="user in users" :key="user.id">
      <h4>{{ user.first_name }} {{ user.last_name}}</h4>
      <p>{{ user.email }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    users: Array,
    default: []
  }
}
</script>

<style>
.user-list {
  list-style-type: none;
  padding: 0;
}
</style>
