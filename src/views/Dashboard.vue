<template>
  <main>
    <h1>Dashboard</h1>
    <UserList :users="users" />
  </main>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import UserList from '../components/UserList.vue';

export default {
  name: 'Dashboard',
  components: { UserList },
  computed: mapState({
    users: state => state.data.users
  }),
  methods: {
    ...mapActions(['getUsers'])
  },
  created () {
    this.getUsers();
  }
};
</script>

<style>

</style>
