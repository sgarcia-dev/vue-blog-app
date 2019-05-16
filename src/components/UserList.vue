<template>
  <ul class="user-list">
    <li v-for="user in users" :key="user.id">
      <img :src="user.avatar" alt="avatar image">
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

.user-list li {
  margin: 3rem;
}

.user-list img {
  width: 5rem;
  border-radius: 100%;
}

.user-list h4 {
  margin: 0;
}

.user-list p {
  margin: 0;
}

</style>
