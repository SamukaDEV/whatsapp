<template>
  <!-- <div class="d-flex justify-content-center align-items-center vh-100" style="background: #dadada;user-select: none;"> -->
    <div class="card shadow">
      <div class="card-body" style="min-width: 300px">
        <div class="mb-3">
          <div class="h3">MSGr</div>
        </div>
        <div class="mb-3">
          <input type="text" class="form-control form-control-sm" placeholder="Email" />
        </div>
        <div class="mb-3">
          <input type="text" class="form-control form-control-sm" placeholder="Password" />
        </div>
        <div class="row">
          <div class="col-sm-6 offset-6">
            <button class="btn btn-sm btn-block btn-info">Sign In</button>
          </div>
        </div>
      </div>
    </div>

    <!-- <input type="text" placeholder="Email">
      <input type="password" placeholder="Password">
    <input type="submit" value="Sign In" @click="auth"/>-->
  <!-- </div> -->
</template>

<script>
export default {
  methods: {
    auth() {
      console.log("porra");
      this.$store.commit("setAuth", true);
    },
  },
};
</script>

<style scoped>
</style>