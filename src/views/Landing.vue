<template>
  <main>
    <h1>Welcome!</h1>
    <p>Please <router-link :to="{ name: 'login' }">login</router-link> with a valid account to explore posts.</p>
  </main>
</template>

<script>
export default {
  name: 'Landing'
};
</script>

<style>
</style>
