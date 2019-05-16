<template>
  <div class="loading-bar" :class="{ active: isLoading }">Loading ...</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'LoadingBar',
  computed: mapState({
    isLoading: state => state.communication.loading
  })
}
</script>

<style>
.loading-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding: 0.5rem 0;
  background-color: #42b983;
  color: white;
  text-align: center;
  transform: translateY(100%);
  transition: 0.3s ease-in transform;
}

.loading-bar.active {
  transform: translateY(0);
}
</style>
