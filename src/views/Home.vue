<template>
  <div>
    <Landing v-if="!isAuthenticated"/>
    <Dashboard v-if="isAuthenticated" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Landing from './Landing.vue';
import Dashboard from './Dashboard.vue';

export default {
  name: 'Home',
  components: { Landing, Dashboard },
  computed: mapState({
    isAuthenticated: state => !!state.session.token
  })
}
</script>

<style>

</style>
