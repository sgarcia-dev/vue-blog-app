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
        alert('User creation succesful! Redirecting to Login ...');
        this.$router.push({
          name: 'login'
        });
      }).catch((err) => {
        alert(err.message);
      });
    }
  }
};
</script>

<style>

</style>
