<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>-->
  <div>
    <Login v-if="!isAuth" />
    <router-view v-if="isAuth" />
  </div>
</template>

<script>
import Login from "./components/Login";
export default {
  components: { Login },
  data() {
    return {};
  },
  computed: {
    isAuth() {
      return this.$store.state.auth;
    },
  },
};
</script>

<style>
</style>
