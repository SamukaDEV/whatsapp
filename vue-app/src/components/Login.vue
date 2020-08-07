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
          @keydown="pass_keydown"
        />
      </div>
      <div class="row">
        <div class="col-6">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch1"
              v-model="remember"
            />
            <label class="custom-control-label" for="customSwitch1">Remember</label>
          </div>
        </div>
        <div class="col-sm-6">
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
      remember: false,
    };
  },
  mounted() {
    this.remember = localStorage.getItem("remember") === "true" ? true : false;
    if (this.remember) {
      this.email = localStorage.getItem("last");
    }
    if (this.email !== "" && this.remember) {
      document.querySelector('input[type="password"]').focus();
    }
  },
  methods: {
    pass_keydown(e) {
      if (e.keyCode === 13) {
        this.auth();
      }
    },
    auth() {
      this.$store.commit("setAuth", 2);
      this.$root.api
        .Auth(this.email, this.password)
        .then((data) => {
          // console.log(data)
          if (data.auth) {
            this.$store.commit("setAuth", 1);
            localStorage.setItem("remember", this.remember);
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