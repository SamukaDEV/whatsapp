<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>-->

  <div class="parent shadow">
    <header class="section">
      <img src="../assets/logo.png" class="pic" />
    </header>
    <div class="left-side section">
      <div class="px-3 py-2 border-bottom">
        <input type="text" class="form-control form-control-sm" placeholder="Search" />
      </div>
      <div class="friends px-3 py-2">
        <div class>
          <div class="row">
            <div class="col-3">
              <img src="../assets/logo.png" class="pic" />
            </div>
            <div class="col-7">Username</div>
          </div>
        </div>
      </div>
    </div>
    <main class="section">Main Content</main>
    <div class="right-side d-none section">Right Sidebar</div>
    <footer class="section">Footer</footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
};
</script>

<style scoped>
.pink {
  background: pink;
}
.blue {
  background: blue;
}
.coral {
  background: coral;
}
.yellow {
  background: yellow;
}
.green {
  background: green;
}
.pic {
  width: 50px;
  border-radius: 100%;
  background: #0f8598;
  border: 2px solid #1691a5;
}

.parent {
  border: 1px solid #bbbbbb;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;
  background: white;
  border-radius: 3px;
}

header {
  /* padding: 2rem; */
  grid-column: 1 / 4;
  background: #17a2b8;
  border-radius: 3px 3px 0px 0px;
  color: white;
  padding: 5px 15px;
}

.left-side {
  grid-column: 1 / 2;
  border-right: 1px solid #bbbbbb;
  min-width: 270px;
}

main {
  grid-column: 2 / 3;
}

.right-side {
  grid-column: 3 / 4;
}

footer {
  grid-column: 1 / 4;
}

@media screen and (min-width: 480px) {
  .parent {
    width: 100%;
  }
}
@media screen and (min-width: 1024px) {
  .parent {
    width: 900px;
    height: 600px;
  }
}
</style>