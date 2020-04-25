<template>
  <div id="app">
    <Navbar />
    <Landing />
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue';
import Landing from './components/Landing.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Landing
  }
}
</script>

<style>
  *{
    margin: 0;
  }
</style>
