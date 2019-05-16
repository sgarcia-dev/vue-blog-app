<template>
  <nav class="navbar">
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about' }">About</router-link>
      </li>
      <li>|</li>
      <span v-if="!isAuthenticated">
        <li>
          <router-link :to="{ name: 'login' }">Login</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'signup' }">Sign Up</router-link>
        </li>
      </span>
      <span v-if="isAuthenticated">
        <li>
          <a href="#" @click.prevent="logout">Logout</a>
        </li>
      </span>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Navbar',
  computed: mapState({
    isAuthenticated: state => !!state.session.token
  }),
  methods: {
    ...mapMutations(['deleteSession']),
    logout () {
      this.deleteSession();
      this.$toasted.info('Logged Out.');
    }
  }
};
</script>

<style>
.navbar ul {
  list-style-type: none;
  padding: 0;
}
.navbar li {
  display: inline-block;
  margin: 0 1rem;
}
</style>
