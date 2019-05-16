<template>
  <nav class="navbar">
    <ul>
      <li>
        <router-link :to="{ name: 'landing' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about' }">About</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'login' }">Login</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'signup' }">Sign Up</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
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
