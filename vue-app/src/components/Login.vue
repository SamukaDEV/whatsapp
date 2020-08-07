<template>
  <div>
      <input type="text" placeholder="Email">
      <input type="password" placeholder="Password">
      <input type="submit" value="Sign In" @click="auth"/>
  </div>
</template>

<script>
export default {
    methods: {
        auth(){
            console.log('porra')
            this.$store.commit('setAuth', true)
        }
    }
};
</script>

<style scoped>
</style>