<template>
  <main>
    <h1>Sign Up</h1>
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
  name: 'Signup',
  data: () => ({
    email: 'tracey.ramos@reqres.in',
    password: 'pistol'
  }),
  methods: {
    ...mapActions(['signup']),
    handleSubmit () {
      const { email, password } = this;
      const payload = { email, password };

      this.signup(payload).then(() => {
        this.$toasted.success('User creation succesful! Please Log In.');
        this.$router.push({
          name: 'login'
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
