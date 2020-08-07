<template>
  <!-- <div class="d-flex justify-content-center align-items-center vh-100" style="background: #dadada;user-select: none;"> -->
  <div class="card shadow">
    <div class="card-body" style="min-width: 300px">
      <div class="mb-3">
        <div class="h3">MSGr</div>
      </div>
      <div class="mb-3">
        <input type="text" class="form-control form-control-sm" placeholder="Email" v-model="email" />
      </div>
      <div class="mb-3">
        <input
          type="password"
          class="form-control form-control-sm"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="row">
        <div class="col-sm-6 offset-6">
          <button class="btn btn-sm btn-block btn-info" @click="auth">Sign In</button>
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
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    auth() {
      this.$store.commit("setAuth", 2);
      this.$root.api
        .auth(this.email, this.password)
        .then((data) => {
          if (data.auth) {
            this.$store.commit("setAuth", 1);
          } else {
            this.$store.commit("setAuth", 0);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
</style>