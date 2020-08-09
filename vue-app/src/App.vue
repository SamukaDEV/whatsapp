<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>-->
  <div
    class="d-flex justify-content-center align-items-center vh-100"
    style="background: #dadada;user-select: none;"
  >
    <!-- <DevTool /> -->
    <OfflineMode v-if="this.$root.offline_mode" />
    <div v-else>
      <Login v-if="isAuth == 0" />
      <router-view v-if="isAuth == 1" />
      <LoadingScreen v-if="isAuth == 2" />
    </div>
  </div>
</template>

<script>
import Login from "./components/Login";
import LoadingScreen from "./components/LoadingScreen";
import OfflineMode from "./components/OfflineMode";
// import DevTool from "./components/DevTool";
export default {
  components: { Login, LoadingScreen, OfflineMode },
  data() {
    return {};
  },
  mounted() {
    console.log("App.vue", this.$root.api.getVueInstance());
    let localSauth = Number(localStorage.getItem("auth")) || 0;
    this.$store.commit("setAuth", localSauth);
    if (localSauth === 1) {
      // get local user profile
      this.$store.commit("setUser", JSON.parse(localStorage.getItem("user")));
    }
    // deny contextmenu at all
    document.oncontextmenu = function (e) {
      e.preventDefault();
    };
  },
  computed: {
    isAuth() {
      return this.$store.state.auth;
    },
  },
};
</script>

<style>
/* SCROLL BAR STYLE */
::-webkit-scrollbar {
  width: 5px;
  /* opacity: 0.3; */
  background: rgb(236 236 236 / 46%);
}
::-webkit-scrollbar-track {
  background: none;
}
::-webkit-scrollbar-thumb {
  background: #267681;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #198594;
}

/* RESET BORDERS AND OUTLINES FROM BOOTSTRAP */

*:focus {
  outline: none;
}

.dropdown-item:active {
  background: #69cedc;
}

.btn:focus {
  outline: none;
  box-shadow: none;
}

.my-icon {
  position: relative;
  top: 4px;
}

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
} */

/* .fade-enter, .fade-leave-to{
  opacity: 0;
  position: absolute;
}
.fade-enter-active, .fade-leave-active{
  transition: all 1s;
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>