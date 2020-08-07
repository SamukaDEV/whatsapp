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
    <DevTool />
    <Login v-if="isAuth == 0" />
    <router-view v-if="isAuth == 1" />
    <LoadingScreen v-if="isAuth == 2" />
  </div>
</template>

<script>
import Login from "./components/Login";
import LoadingScreen from "./components/LoadingScreen";
import DevTool from "./components/DevTool";
export default {
  components: { Login, LoadingScreen, DevTool },
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
/* SCROLL BAR STYLE */
::-webkit-scrollbar {
	width: 5px;
	opacity: 0.3;
}

::-webkit-scrollbar-track {
	background: none;
}

::-webkit-scrollbar-thumb {
	background: rgba(0, 0, 0, 0.2);
}
::-webkit-scrollbar-thumb:hover {
	background: rgba(0, 0, 0, 0.3);
}

/* RESET BORDERS AND OUTLINES FROM BOOTSTRAP */

*:focus{
  outline: none;
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