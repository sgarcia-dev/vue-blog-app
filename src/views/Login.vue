<template>
  <main>
    <h1>Log In</h1>
    <form @submit.prevent="handleSubmit">
      <label for="email">Email:</label>
      <input type="text" name="email" id="email" v-model="email">
      <label for="password">Password:</label>
      <input type="password" name="password" id="password" v-model="password">
      <input type="submit">
    </form>
  </main>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data: () => ({
    email: 'tracey.ramos@reqres.in',
    password: 'pistol'
  }),
  methods: {
    ...mapActions(['login']),
    handleSubmit () {
      const { email, password } = this;
      const payload = { email, password };

      this.login(payload).then(() => {
        this.$toasted.success('Login Succesful!');
        this.$router.push({
          name: 'home'
        });
      }).catch((err) => {
        this.$toasted.error(err.message);
      });
    }
  }
};
</script>

<style>

</style>
